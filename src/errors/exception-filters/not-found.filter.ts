import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    NotFoundException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
    catch(exception: NotFoundException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();

        const res = ctx.getResponse<Response>();

        const status = exception.getStatus();

        res.status(status).json({
            resultCode: 404000,
            message: 'API를 확인해주세요.',
            data: null,
        });
    }
}
