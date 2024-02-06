import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import { DataSource } from "typeorm";

export const TypeOrmConfig: TypeOrmModuleAsyncOptions = {
    name: "default",
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
        return {
            type: "postgres",
            host: configService.get<string>("DATABASE_HOST"),
            port: configService.get<number>("DATABASE_PORT"),
            username: configService.get<string>("DATABASE_USERNAME"),
            password: configService.get<string>("DATABASE_PASSWORD"),
            database: configService.get<string>("DATABASE_NAME"),
            logging: ["warn", "error"],
            entities: ["dist/common/entities/*.entity.js"],
            synchronize: true,
        };
    },
    dataSourceFactory: async options => {
        return await new DataSource(options).initialize();
    },
};
