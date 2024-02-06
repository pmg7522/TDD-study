import { INestApplication } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

export const swaggerConfig = (app: INestApplication) => {
    const options = new DocumentBuilder()
        .setTitle("API DOCS")
        .setVersion("1.0.0")
        .addServer("http://localhost:3000")
        .addBearerAuth({ type: "http", scheme: "Bearer", name: "authorization", description: "Bearer accessToken", in: "header" }, "accessToken")
        .build();

    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup("api-docs", app, document);
};
