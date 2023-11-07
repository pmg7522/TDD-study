import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
    getDetail(): object {
        return {
            id: 1,
            name: '졸리',
        };
    }
}
