import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CatRequestDto } from './dto/cats.request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './cats.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CatsService {
    constructor(
        @InjectRepository(Cat) private readonly catRepository: Repository<Cat>,
    ) {}

    async signUp(body: CatRequestDto) {
        const { email, name, password } = body;

        const isCatExist = await this.catRepository.exist({ where: { email } });

        if (isCatExist) {
            throw new UnauthorizedException('해당 고양이가 이미 존재합니다.');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const cat = this.catRepository.create({
            email,
            name,
            password: hashedPassword,
        });

        return cat;
    }
}
