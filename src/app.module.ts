import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as Joi from "joi";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { AppController } from "./app.controller";
import { UserEntity } from "./users/users.entity";
import { UsersModule } from "./users/users.module";

const typeOrmModuleOptions = {
    useFactory: async (
        configService: ConfigService,
    ): Promise<TypeOrmModuleOptions> => ({
        namingStrategy: new SnakeNamingStrategy(),
        type: "postgres",
        host: configService.get("DATABASE_HOST"),
        port: configService.get("DATABASE_PORT"),
        username: configService.get("DATABASE_USER"),
        password: configService.get("DATABASE_PASSWORD"),
        database: configService.get("DATABASE_NAME"),
        entities: [UserEntity],
        synchronize: true, //! set 'false' in production
        autoLoadEntities: true,
        logging: true,
        keepConnectionAlive: true,
    }),
    inject: [ConfigService],
};

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema: Joi.object({
                NODE_ENV: Joi.string()
                    .valid("development", "production", "test", "provision")
                    .default("development"),
                PORT: Joi.number().default(5000),
                SECRET_KEY: Joi.string().required(),
                ADMIN_USER: Joi.string().required(),
                ADMIN_PASSWORD: Joi.string().required(),
                DATABASE_USER: Joi.string().required(),
                DATABASE_PASSWORD: Joi.string().required(),
                DATABASE_HOST: Joi.string().required(),
                DATABASE_PORT: Joi.number().required(),
                DATABASE_NAME: Joi.string().required(),
            }),
        }),
        TypeOrmModule.forRootAsync(typeOrmModuleOptions),
        UsersModule,
    ],
    controllers: [AppController],
})
export class AppModule {}
