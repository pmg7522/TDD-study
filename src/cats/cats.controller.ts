import { Controller, Get, HttpException, UseFilters } from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from '@/errors/exception-filters/http-exception.filter';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Get()
    @UseFilters(HttpExceptionFilter)
    getDetail(): object {
        throw new HttpException(
            { resultCode: 401000, message: 'unauthorized' },
            401,
        );

        return this.catsService.getDetail();
    }
}
