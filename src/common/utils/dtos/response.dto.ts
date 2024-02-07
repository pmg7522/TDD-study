import { ApiProperty } from "@nestjs/swagger";

export class ResponseDto {
    @ApiProperty({ description: "결과 코드" })
    resultCode: number;

    @ApiProperty({ description: "응답 메세지" })
    message: string;

    data: object | null;
}

export class NoDataResponseDto extends ResponseDto {
    @ApiProperty({ example: null })
    data: object | null;
}

export class Meta {
    @ApiProperty({ description: "요청 할 페이지 번호" })
    currentPage: number;

    @ApiProperty({ description: "한 페이지의 데이터 수" })
    currentLimit: number;

    @ApiProperty({ description: "총 페이지 수" })
    totalPage: number;

    @ApiProperty({ description: "총 데이터 수" })
    totalCount: number;
}
