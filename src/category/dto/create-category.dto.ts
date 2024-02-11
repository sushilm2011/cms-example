import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateCategoryDto {
  @ApiProperty({ example: "Coffee" })
  @IsString()
  name: string;

  @ApiProperty({ example: "Coffee Category" })
  @IsString()
  description: string;
}
