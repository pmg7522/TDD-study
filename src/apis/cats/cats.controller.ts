import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Get(':id')
    getDetail(@Param('id', ParseIntPipe) param): object {
        console.log(param);
        return this.catsService.getDetail();
    }
}
