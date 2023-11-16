import { Get, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation } from "@nestjs/swagger";
import { CurrentUser } from "~/common/decorators/current-user.decorator";
import { JwtAuthGuard } from "~/users/jwt/jwt.guard";
import { PostEntity } from "./posts.entity";

export class PostsController {
    @Get("/management/posts")
    @ApiOperation({ summary: "최고" })
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    async ManagementPosts(@CurrentUser() currentUser: PostEntity) {
        console.log("currentUser: ", currentUser);
    }
}
