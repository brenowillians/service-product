import { BoolBitTransformer } from "@averbach/nest-shared-utils";

import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    Index,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToOne,
    JoinColumn
    
  } from "typeorm";
import { ProductSize } from "./product_size";
import { Brand } from "./brand";
import { Category } from "./category";


  @Index("PK_Product", ["idProduct"], { unique: true })

  @Entity("product")
  export class Product {

    @PrimaryGeneratedColumn({ type: "int", name: "id_product" })
    idProduct: number;
     
    @Column("varchar", { name: "name"})
    name: string ;

    @Column("bit", { name: "active", nullable:true, transformer: new BoolBitTransformer })
    active: boolean ;
    
    @Column("int", { name: "created_id" })
    createdId: number;

    @Column("int", { name: "updated_id", nullable:true })
    updatedId: number | null;

    @Column("varchar", { name: "image"})
    image: string ;

    @Column("numeric", { name: "fullprice" })
    fullPrice: number;

    @Column("numeric", { name: "saleprice", nullable:true })
    salePrice: number | null;

    @Column("bit", { name: "onsale", nullable:true, transformer: new BoolBitTransformer })
    onSale: boolean ;

    @Column("varchar", { name: "description"})
    description: string ;

    @Column("int", { name: "id_brand" })
    idBrand: number;

    @Column("int", { name: "id_category" })
    idCategory: number;
    
    @CreateDateColumn({ type: 'timestamptz', precision: 3 })
    createdDate: string;
     
    @UpdateDateColumn({ type: 'timestamptz', precision: 3 })
    updatedDate: string;
    
    @DeleteDateColumn({ type: 'timestamptz', precision: 3 })
    deletedDate: string;  
      
    @OneToMany(
        () => ProductSize,
        (productSize) => productSize.idProduct2
      )
  
      productSizes: ProductSize[];

    @ManyToOne(() => Brand, (brand) => brand.products, {
        onDelete: "CASCADE"
      })
      @JoinColumn([{ name: "id_brand", referencedColumnName: "idBrand" }])
      idBrand2: Brand;

    @ManyToOne(() => Category, (category) => category.products, {
        onDelete: "CASCADE"
      })
      @JoinColumn([{ name: "id_category", referencedColumnName: "idCategory" }])
      idCategory2: Category;
 
   

  }  