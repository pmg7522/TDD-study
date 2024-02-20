import { Entity, Column, ManyToMany } from "typeorm";
import { CommonEntity, Product } from ".";

// 상품 카테고리
@Entity({ name: "ProductCategory" })
export class ProductCategory extends CommonEntity {
    @Column("varchar", { nullable: false, comment: "카테고리명" })
    name: string;

    @ManyToMany(() => Product)
    products: Product[];
}
