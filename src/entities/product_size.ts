import { BoolBitTransformer } from "@averbach/nest-shared-utils";


import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    Index,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn
    
  } from "typeorm";
import { Product } from "./product";
import { Size } from "./size";


  @Index("PK_ProductSize", ["idProductSize"], { unique: true })

  @Entity("product_size")
  export class ProductSize {

    @PrimaryGeneratedColumn({ type: "int", name: "id_product_size" })
    idProductSize: number;

    @Column("int", { name: "id_product" })
    idProduct: number;
     
    @Column("int", { name: "id_size" })
    idSize: number;

    @Column("bit", { name: "available", nullable:true, transformer: new BoolBitTransformer })
    available: boolean ;
    
    @Column("int", { name: "created_id" })
    createdId: number;

    @Column("int", { name: "updated_id", nullable:true  })
    updatedId: number | null;
    
    @CreateDateColumn({ type: 'timestamptz', precision: 3 })
    createdDate: string;
     
    @UpdateDateColumn({ type: 'timestamptz', precision: 3 })
    updatedDate: string;
    
    @DeleteDateColumn({ type: 'timestamptz', precision: 3 })
    deletedDate: string;  
 
    @ManyToOne(() => Product, (product) => product.productSizes, {
        onDelete: "CASCADE"
      })
      @JoinColumn([{ name: "id_product", referencedColumnName: "idProduct" }])
      idProduct2: Product;

    @ManyToOne(() => Size, (size) => size.productSizes, {
        onDelete: "CASCADE"
      })
      @JoinColumn([{ name: "id_size", referencedColumnName: "idSize" }])
      idSize2: Size;

      

  }  