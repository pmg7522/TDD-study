import { IsDate, IsEmail, IsInt, IsNotEmpty, IsString } from 'class-validator';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    DeleteDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'Cat' })
export class Cat {
    @PrimaryGeneratedColumn({ comment: '고유 아이디' })
    @IsInt()
    @IsNotEmpty()
    id: number;

    @CreateDateColumn({ type: 'timestamp with time zone' })
    @IsDate()
    @IsNotEmpty()
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp with time zone' })
    @IsDate()
    @IsNotEmpty()
    updatedAt: Date;

    @DeleteDateColumn({ type: 'timestamp with time zone' })
    deletedAt?: Date | null;

    @Column('varchar', { nullable: false })
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string;

    @Column('varchar', { nullable: false })
    @IsString()
    @IsNotEmpty()
    name: string;

    @Column('varchar', { nullable: false })
    @IsString()
    @IsNotEmpty()
    password: string;

    @Column('varchar')
    @IsString()
    imageUrl: string;
}
