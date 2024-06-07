import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository, ILike } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateSizeDto } from 'src/dto/update-size.dto';
import { Size } from 'src/entities/size';
import { CreateSizeDto } from 'src/dto/create-size.dto';
import { ListCriteriaSizeDto } from 'src/dto/list-criteria-size.dto';

@Injectable()
export class SizeService {
    
    
    constructor(
        @InjectRepository(Size) private sizeRepo: Repository<Size>,
      ) {}
    
      async create(createSizeDto: CreateSizeDto) {
        
        const size: Size = this.sizeRepo.create(createSizeDto);
        return await this.sizeRepo.save(size); 
    
      }
    
      findAll() {
        return this.sizeRepo.find()
      }
    
      findOne(id: number) {
        return this.sizeRepo.findOne({where: {idSize: id}})
      }
    
      update(id: number, updateSizeDto: UpdateSizeDto) {
        return this.sizeRepo.update(id, updateSizeDto)
      }
    
      remove(id: number) {
        
        return this.sizeRepo.delete(id)
      }

      async list(data: ListCriteriaSizeDto) {

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
    
            const [result, total] = await this.sizeRepo.findAndCount(
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
        return this.sizeRepo.find(
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
