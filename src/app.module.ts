import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './apis/user/user.controller';
import { UserModule } from './apis/user/user.module';
import { ReviewService } from './apis/product/apis/review/review.service';
import { ProductService } from './apis/product/product-category/apis/product/product.service';
import { ProductCategoryService } from './apis/product/product-category/product-category.service';
import { OrderService } from './apis/order/order.service';
import { OrderDetailService } from './apis/order-detail/order-detail.service';
import { CartService } from './apis/cart/cart.service';
import { AuthService } from './apis/auth/auth.service';
import { AuthController } from './apis/auth/auth.controller';
import { CartController } from './apis/cart/cart.controller';
import { OrderController } from './apis/order/order.controller';
import { OrderDetailController } from './apis/order/order-detail/order-detail.controller';
import { ProductController } from './apis/product/product.controller';
import { ProductCategoryController } from './apis/product/product-category/product-category.controller';
import { ReviewController } from './apis/review/review.controller';
import { ReviewModule } from './apis/review/review.module';
import { ProductModule } from './apis/product/product.module';
import { OrderModule } from './apis/order/order.module';
import { CartModule } from './apis/cart/cart.module';
import { AuthModule } from './apis/auth/auth.module';

@Module({
  imports: [UserModule, ReviewModule, ProductModule, OrderModule, CartModule, AuthModule],
  controllers: [AppController, UserController, AuthController, CartController, OrderController, OrderDetailController, ProductController, ProductCategoryController, ReviewController],
  providers: [AppService, ReviewService, ProductService, ProductCategoryService, OrderService, OrderDetailService, CartService, AuthService],
})
export class AppModule {}
