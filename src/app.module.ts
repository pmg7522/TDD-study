import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./apis/auth/auth.module";
import { CartModule } from "./apis/cart/cart.module";
import { UserModule } from "./apis/user/user.module";
import { ReviewModule } from "./apis/review/review.module";
import { ProductModule } from "./apis/product/product.module";
import { ProductCategoryModule } from "./apis/product/product-category/product-category.module";
import { OrderModule } from "./apis/order/order.module";
import { OrderDetailModule } from "./apis/order/order-detail/order-detail.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmConfig } from "./common/utils/configs/typeorm.config";
import { LoggerMiddleware } from "./common/utils/middlewares/logger.middleware";

@Module({
    imports: [
        ConfigModule.forRoot({ cache: true, isGlobal: true }),
        TypeOrmModule.forRootAsync(TypeOrmConfig),
        AuthModule,
        CartModule,
        OrderModule,
        OrderDetailModule,
        ProductModule,
        ProductCategoryModule,
        ReviewModule,
        UserModule,
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): any {
        consumer.apply(LoggerMiddleware).forRoutes("*");
    }
}
