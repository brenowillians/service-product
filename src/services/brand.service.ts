import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBrandDto } from 'src/dto/create-brand.dto';
import { ListCriteriaBrandDto } from 'src/dto/list-criteria-brand.dto';
import { UpdateBrandDto } from 'src/dto/update-brand.dto';
import { Brand } from 'src/entities/brand';
import { Repository, ILike} from 'typeorm';

@Injectable()
export class BrandService {
    constructor(
        @InjectRepository(Brand) private brandRepo: Repository<Brand>,
      ) {}
    
      async create(createBrandDto: CreateBrandDto) {
        
        const brand: Brand = this.brandRepo.create(createBrandDto);
        return await this.brandRepo.save(brand); 
    
      }
    
      findAll() {
        return this.brandRepo.find()
      }
          
      findOne(id: number) {
        return this.brandRepo.findOne({where: {idBrand: id}})
      }
    
      update(id: number, updateBrandDto: UpdateBrandDto) {
        return this.brandRepo.update(id, updateBrandDto)
      }
    
      remove(id: number) {
        
        return this.brandRepo.delete(id)
      }

      async list(data: ListCriteriaBrandDto) {

        try{
            let criteria  = {}
            
            if (data.active){
              criteria["active"]= true
            }
            else{
              if(data.active == false){
                criteria["active"]= false
              }
            }
              
            if (data.name)
              criteria["name"]= ILike('%' +data.name  + '%')
    
            const take= data.items || 10
            const page= data.page || 1;
            const skip= (page-1) * take ;
    
            const [result, total] = await this.brandRepo.findAndCount(
                {
                    where: criteria,
                    order: data.order,
                    take: take,
                    skip: skip
                }
            );
    
            if(!result || result.length===0){
                throw new NotFoundException('nothing to show'); 
            }
    
    
            return {
                status: 200,
                data: {result: result, total: total},
                message:'list in data.result and total in data.total',
                error: null
            }
        }
        catch(error){
            if(error instanceof NotFoundException){            
                return {
                    status: 404,
                    data: null,
                    message:error.message,
                    error: error.message
                }
            }
    
            return {
                status: 400,
                data: null,
                message:error.message,
                error: error.stack
            }           
        }    
        
      }

      findAllActive() {
        return this.brandRepo.find(
          {
            where:{
              active:true
            },
            order:{
              name: "ASC"
            }
          }
        )
      }
}
