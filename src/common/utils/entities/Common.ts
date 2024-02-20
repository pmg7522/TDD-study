import { DeleteDateColumn, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class CommonEntity {
    @PrimaryGeneratedColumn({ comment: "고유 아이디" })
    id: number;

    @CreateDateColumn({ type: "timestamp with time zone", comment: "생성일" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp with time zone", comment: "수정일" })
    updatedAt: Date;

    @DeleteDateColumn({ type: "timestamp with time zone", comment: "삭제일" })
    deletedAt?: Date | null;
}
