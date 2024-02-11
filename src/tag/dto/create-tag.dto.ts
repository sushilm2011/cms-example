import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateTagDto {
  @ApiProperty({ example: 'Tag Name', description: 'The name of the tag' })
  @IsString()
  name: string;
}
