import { Entity, Column, ManyToOne } from "typeorm";
import { CommonEntity, User } from ".";

// 리뷰
@Entity({ name: "Review" })
export class Review extends CommonEntity {
    @Column("varchar", { nullable: false, comment: "제목" })
    title: string;

    @Column("varchar", { nullable: false, comment: "내용" })
    content: string;

    @Column("varchar", { nullable: true, array: true, comment: "이미지 url" })
    imageUrls: string[] | [];

    @ManyToOne(() => User, user => user.reviews)
    writer: User;
}
