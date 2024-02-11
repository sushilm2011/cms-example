import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID, ValidateNested } from "class-validator";
import { Category } from "src/category/entities/category.entity";

export class CreateArticleDto {
  @ApiProperty({ example: "Article title" })
  @IsString()
  title: string;

  @ApiProperty({ example: "Article body" })
  @IsString()
  body: string;

  @ApiProperty({ example: "Article's author name" })
  @IsString()
  authorName: string;

  @ApiProperty({ example: "f13a7cab-addc-4191-aa0c-515050d17c0f" })
  @IsUUID()
  category: string;

  @ApiProperty({ isArray: true, example: "[f13a7cab-addc-4191-aa0c-515050d17c0f]" })
  @IsUUID("4", { each: true })
  tags: string[];
}
