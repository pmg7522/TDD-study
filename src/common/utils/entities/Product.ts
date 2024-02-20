import { Entity, Column, ManyToMany, JoinTable } from "typeorm";
import { CommonEntity, ProductCategory } from ".";

// 상품
@Entity({ name: "Product" })
export class Product extends CommonEntity {
    @Column("varchar", { nullable: false, comment: "상품명" })
    name: string;

    @Column("varchar", { nullable: false, comment: "상품 설명" })
    description: string;

    @Column("varchar", { nullable: false, comment: "썸네일 url" })
    thumbnailUrl: string;

    @Column("varchar", { nullable: true, array: true, comment: "상품 사진 url" })
    imageUrls: string[] | [];

    @Column("numeric", {
        nullable: false,
        precision: 11,
        scale: 2,
        transformer: {
            to(value) {
                return value;
            },
            from(value) {
                return parseFloat(value);
            },
        },
        comment: "가격",
    })
    price: number;

    @ManyToMany(() => ProductCategory)
    @JoinTable({
        name: "Join:ProductCategory",
        joinColumn: { name: "productId" },
        inverseJoinColumn: { name: "categoryId" },
    })
    categories: ProductCategory[];
}
