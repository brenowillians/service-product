import { BoolBitTransformer } from "@averbach/nest-shared-utils";

import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    Index,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    OneToMany
    
  } from "typeorm";
import { Product } from "./product";


  @Index("PK_Category", ["idCategory"], { unique: true })

  @Entity("category")
  export class Category {

    @PrimaryGeneratedColumn({ type: "int", name: "id_category" })
    idCategory: number;
     
    @Column("varchar", { name: "name"})
    name: string ;

    @Column("bit", { name: "active", nullable:true, transformer: new BoolBitTransformer })
    active: boolean ;
    
    @Column("int", { name: "created_id" })
    createdId: number;

    @Column("int", { name: "updated_id", nullable:true })
    updatedId: number | null;
    
    @CreateDateColumn({ type: 'timestamptz', precision: 3 })
    createdDate: string;
     
    @UpdateDateColumn({ type: 'timestamptz', precision: 3 })
    updatedDate: string;
    
    @DeleteDateColumn({ type: 'timestamptz', precision: 3 })
    deletedDate: string;  
 
    @OneToMany(
        () => Product,
        (product) => product.idCategory2
      )
  
      products: Product[];

  }  