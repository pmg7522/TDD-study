import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Get()
    getCurrentCat() {
        return 'current cat';
    }

    @Post()
    signUp() {
        return 'signup';
    }

    @Post('login')
    logIn() {
        return 'login';
    }

    @Post('logout')
    logOut() {
        return 'logout';
    }

    @Post('upload/cats')
    uploadCatImage() {
        return 'upload Image';
    }
}
