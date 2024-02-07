import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from "@nestjs/common";
import { Response } from "express";
import { IErrorResponse } from "../interfaces/response.interface";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const res = ctx.getResponse<Response>();
        const status = exception.getStatus();
        const result = exception.getResponse() as IErrorResponse;

        return res.status(status).json({
            message: typeof result.message === "string" ? result.message : result.message[0],
            data: null,
        });
    }
}
