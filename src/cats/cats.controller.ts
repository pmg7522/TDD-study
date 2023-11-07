import {
    Controller,
    Get,
    HttpException,
    Param,
    ParseIntPipe,
    UseFilters,
    UseInterceptors,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from '@/common/exceptions/http-exception.filter';
import { SuccessInterceptor } from '@/common/interceptors/logging.interceptor';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Get(':id')
    getDetail(@Param('id', ParseIntPipe) param): object {
        console.log(param);
        return this.catsService.getDetail();
    }
}
