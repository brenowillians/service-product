import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from 'src/dto/create-category.dto';
import { ListCriteriaCategoryDto } from 'src/dto/list-criteria-category.dto';
import { UpdateCategoryDto } from 'src/dto/update-category.dto';
import { Category } from 'src/entities/category';
import { Repository, ILike} from 'typeorm';


@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category) private categoryRepo: Repository<Category>,
      ) {}
    
      async create(createCategoryDto: CreateCategoryDto) {
        
        const category: Category = this.categoryRepo.create(createCategoryDto);
        return await this.categoryRepo.save(category); 
    
      }
    
      findAll() {
        return this.categoryRepo.find()
      }
    
      findOne(id: number) {
        return this.categoryRepo.findOne({where: {idCategory: id}})
      }
    
      update(id: number, updateCategoryDto: UpdateCategoryDto) {
        return this.categoryRepo.update(id, updateCategoryDto)
      }
    
      remove(id: number) {
        
        return this.categoryRepo.delete(id)
      }

      async list(data: ListCriteriaCategoryDto) {

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
    
            const [result, total] = await this.categoryRepo.findAndCount(
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
        return this.categoryRepo.find(
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
