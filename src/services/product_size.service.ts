import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductSizeDto } from 'src/dto/create-product_size.dto';
import { ListCriteriaProduct_sizeDto } from 'src/dto/list-criteria-product_size.dto';
import { UpdateProductSizeDto } from 'src/dto/update-product_size.dto';
import { ProductSize } from 'src/entities/product_size';
import { Repository, ILike } from 'typeorm';


@Injectable()
export class ProductSizeService {
    constructor(
        @InjectRepository(ProductSize) private productSizeRepo: Repository<ProductSize>,
      ) {}
    
      async create(createProductSizeDto: CreateProductSizeDto) {
        
        const productSize: ProductSize = this.productSizeRepo.create(createProductSizeDto);
        return await this.productSizeRepo.save(productSize); 
    
      }
    
      findAll() {
        return this.productSizeRepo.find()
      }
    
      findOne(id: number) {
        return this.productSizeRepo.findOne({where: {idProductSize: id}})
      }
    
      update(id: number, updateProductSizeDto: UpdateProductSizeDto) {
        return this.productSizeRepo.update(id, updateProductSizeDto)
      }
    
      remove(id: number) {
        
        return this.productSizeRepo.delete(id)
      }

      async list(data: ListCriteriaProduct_sizeDto) {

        try{
            let criteria  = {}
            
            if (data.available){
              criteria["available"]= true
            }
            else{
              if(data.available == false){
                criteria["available"]= false
              }
            }

            if (data.idProduct){
              criteria["idProduct"]= data.idProduct
            }

            if (data.idSize){
              criteria["idSize"]= data.idSize
            }

            
            const take= data.items || 10
            const page= data.page || 1;
            const skip= (page-1) * take ;
    
            const [result, total] = await this.productSizeRepo.findAndCount(
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



}
