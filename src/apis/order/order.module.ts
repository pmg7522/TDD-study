import { Module } from '@nestjs/common';
import { OrderDetailModule } from './order-detail/order-detail.module';

@Module({
  imports: [OrderDetailModule]
})
export class OrderModule {}
