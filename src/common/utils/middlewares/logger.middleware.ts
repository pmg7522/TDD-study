import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    private logger = new Logger("HTTP");

    use(request: Request, response: Response, next: NextFunction): void {
        const now = Date.now();
        const { method, originalUrl } = request;

        response.on("finish", () => {
            const { statusCode } = response;
            const delay = Date.now() - now;

            let color;
            if (statusCode >= 500) {
                color = 31;
            } else if (statusCode >= 400) {
                color = 33;
            } else if (statusCode >= 300) {
                color = 36;
            } else if (statusCode >= 200) {
                color = 32;
            }

            this.logger.log(
                `\x1b[${color};1m${statusCode}\x1b[0m | \x1b[36;1m${method}\x1b[0m \x1b[33;1m${originalUrl}\x1b[0m | \x1b[35;1m${delay}ms\x1b[0m`,
            );
        });

        next();
    }
}
