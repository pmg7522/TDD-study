import { Module } from '@nestjs/common';
import { ProductCategoryModule } from './product-category/product-category.module';

@Module({
  imports: [ProductCategoryModule]
})
export class ProductModule {}
