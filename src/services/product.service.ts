import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from 'src/dto/create-product.dto';
import { ListCriteriaProductByCategoryDto } from 'src/dto/list-criteria-product-by-category.dto';
import { ListCriteriaProductDto } from 'src/dto/list-criteria-product.dto';
import { UpdateProductDto } from 'src/dto/update-product.dto';
import { Product } from 'src/entities/product';
import { Repository, ILike, MoreThan, LessThanOrEqual } from 'typeorm';

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

      async listByCategory(data: ListCriteriaProductByCategoryDto) {

        try{
            let criteria  = {}
            
            criteria["idCategory"]= data.idCategory

            if (data.isOverPrice && data.fullPrice){
              criteria["fullPrice"]= MoreThan(data.fullPrice)
            }
            else{
              if(data.isOverPrice == false && data.fullPrice){
                criteria["fullPrice"]= LessThanOrEqual (data.fullPrice)
              }
            }
              
            if (data.idBrand)
              criteria["idBrand"]= data.idBrand

            if (data.idSize)
              criteria["productSizes"]= {
                idSize: data.idSize
              }

        

            const take= data.items || 10
            const page= data.page || 1;
            const skip= (page-1) * take ;
    
            const [result, total] = await this.productRepo.findAndCount(
                {
                    where: criteria,
                    relations: ['productSizes'],
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
        return this.productRepo.find(
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
