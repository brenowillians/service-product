import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from 'src/dto/create-product.dto';
import { ListCriteriaProductDto } from 'src/dto/list-criteria-product.dto';
import { UpdateProductDto } from 'src/dto/update-product.dto';
import { Product } from 'src/entities/product';
import { Repository, ILike } from 'typeorm';

@Injectable()
export class ProductService {
    
    constructor(
        @InjectRepository(Product) private productRepo: Repository<Product>,
      ) {}
    
      async create(createProductDto: CreateProductDto) {
        
        const product: Product = this.productRepo.create(createProductDto);
        return await this.productRepo.save(product); 
    
      }
    
      findAll() {
        return this.productRepo.find()
      }
    
      findOne(id: number) {
        return this.productRepo.findOne({where: {idProduct: id}})
      }
    
      update(id: number, updateProductDto: UpdateProductDto) {
        return this.productRepo.update(id, updateProductDto)
      }
    
      remove(id: number) {
        
        return this.productRepo.delete(id)
      }

      async list(data: ListCriteriaProductDto) {

        try{
            let criteria  = {}
            
            if (data.onSale){
              criteria["onSale"]= true
            }
            else{
              if(data.onSale == false){
                criteria["onSale"]= false
              }
            }
              
            if (data.image)
              criteria["image"]= ILike('%' +data.image  + '%')

            if (data.name)
              criteria["name"]= ILike('%' +data.name  + '%')

            if (data.description)
              criteria["description"]= ILike('%' +data.description  + '%')
      
            if (data.fullPrice)
              criteria["fullPrice"]= data.fullPrice 
      
            if (data.salePrice)
              criteria["salePrice"]= data.salePrice
        

            const take= data.items || 10
            const page= data.page || 1;
            const skip= (page-1) * take ;
    
            const [result, total] = await this.productRepo.findAndCount(
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
