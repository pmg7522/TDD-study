import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
    imports: [CatsModule],
    exports: [CatsModule],
    controllers: [CatsController],
    providers: [CatsService],
})
export class CatsModule {}
