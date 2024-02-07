import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from "@nestjs/common";
import { Observable } from "rxjs";
import { IRequest } from "../interfaces/request.interface";

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
    }

    async validateRequest(request: IRequest): Promise<boolean> {
        const authorization = request.headers?.authorization;
        if (!authorization || !authorization.startsWith("Bearer")) throw new HttpException("Unauthorized", HttpStatus.UNAUTHORIZED);

        const accessToken = authorization.split(" ")[1];
    }
}
