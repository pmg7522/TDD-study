import { Module } from "@nestjs/common";
import { PostsController } from "./posts.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostEntity } from "./posts.entity";

@Module({
    imports: [TypeOrmModule.forFeature([PostEntity])],
    providers: [],
    controllers: [PostsController],
})
export class PostsModule {}
