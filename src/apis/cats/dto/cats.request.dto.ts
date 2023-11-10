import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Entity, Column } from 'typeorm';

@Entity({ name: 'Cat' })
export class CatRequestDto {
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
