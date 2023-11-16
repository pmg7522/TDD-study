import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";
import { CommonEntity } from "../common/entities/common.entity"; // ormconfig.json에서 파싱 가능하도록 상대 경로로 지정
import { Column, Entity, Index } from "typeorm";
import { Exclude } from "class-transformer";

@Index("email", ["email"], { unique: true })
@Entity({
    name: "Post",
}) // USER : 테이블 명
export class PostEntity extends CommonEntity {
    @IsString()
    @IsNotEmpty({ message: "제목을 작성해주세요." })
    @Column({ type: "varchar", nullable: false })
    title: string;
}
