import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto {
  @ApiProperty({
    description: 'Name of the project',
    example: 'Website Redesign',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'ID of the user who owns the project',
    example: 'd8e7e739-2a98-4a6b-91b2-8a3c90b5e6c9',
  })
  @IsString()
  @IsNotEmpty()
  ownerId: string;
}
