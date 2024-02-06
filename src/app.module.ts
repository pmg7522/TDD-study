import { Module } from "@nestjs/common";
import { AuthModule } from "./apis/auth/auth.module";
import { CartModule } from "./apis/cart/cart.module";
import { UserModule } from "./apis/user/user.module";
import { ReviewModule } from "./apis/review/review.module";
import { ProductModule } from "./apis/product/product.module";
import { ProductCategoryModule } from "./apis/product/product-category/product-category.module";
import { OrderModule } from "./apis/order/order.module";
import { OrderDetailModule } from "./apis/order/order-detail/order-detail.module";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        UserModule,
        ReviewModule,
        ProductModule,
        ProductCategoryModule,
        OrderModule,
        OrderDetailModule,
        CartModule,
        AuthModule,
    ],
})
export class AppModule {}
