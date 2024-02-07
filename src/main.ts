import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";
import { setupSwagger } from "./common/utils/configs/swagger.config";
import { ValidationPipe } from "@nestjs/common";
import { SuccessInterceptor } from "./common/utils/interceptors/success.interceptor";
import { HttpExceptionFilter } from "./common/utils/exceptions/http-exception.filter";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);

    /** CORS */
    app.enableCors({ origin: true });

    /** Swagger */
    setupSwagger(app);

    /** Pipe */
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            transform: true,
            stopAtFirstError: true,
            transformOptions: { enableImplicitConversion: true },
        }),
    );

    /** Exception Filter */
    app.useGlobalFilters(new HttpExceptionFilter());

    /** Interceptor */
    app.useGlobalInterceptors(new SuccessInterceptor());

    /** Server */
    await app.listen(configService.get<number>("SERVER_PORT"));
}
bootstrap();
