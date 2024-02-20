import { Entity, Column, OneToMany } from "typeorm";
import { CommonEntity, Order, Review } from ".";
import { Gender } from "../enums/user.enum";

// 유저
@Entity({ name: "User" })
export class User extends CommonEntity {
    @Column("varchar", { nullable: false, unique: true, comment: "이메일" })
    email: string;

    @Column("varchar", { nullable: false, comment: "비밀번호" })
    password: string;

    @Column("varchar", { nullable: true, comment: "이름" })
    name: string | null;

    @Column("varchar", { nullable: true, unique: true, comment: "전화번호" })
    phoneNumber: string | null;

    @Column("varchar", { nullable: true, comment: "로그인 토큰" })
    loginToken: string | null;

    @Column("timestamp with time zone", { nullable: true, comment: "최근 접속일" })
    loggedInAt: Date | null;

    @Column("enum", { nullable: true, enum: Gender })
    gender: Gender | null;

    @OneToMany(() => Review, review => review.writer)
    reviews: Review[] | [];

    @OneToMany(() => Order, order => order.user)
    orders: Order[] | [];
}
