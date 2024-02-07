import { INestApplication } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

export const setupSwagger = (app: INestApplication) => {
    const options = new DocumentBuilder()
        .setTitle("API DOCS")
        .setVersion("1.0.0")
        .addBearerAuth({ type: "http", scheme: "Bearer", name: "authorization", description: "Bearer accessToken", in: "header" }, "accessToken")
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup("docs", app, document);
};
