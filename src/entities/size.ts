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
import { ProductSize } from "./product_size";


  @Index("PK_Size", ["idSize"], { unique: true })

  @Entity("size")
  export class Size {

    @PrimaryGeneratedColumn({ type: "int", name: "id_size" })
    idSize: number;
     
    @Column("varchar", { name: "name"})
    name: string ;

    @Column("bit", { name: "active", nullable:true, transformer: new BoolBitTransformer })
    active: boolean ;
    
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
 
    @OneToMany(
        () => ProductSize,
        (productSize) => productSize.idSize2
      )
  
      productSizes: ProductSize[];

  }  