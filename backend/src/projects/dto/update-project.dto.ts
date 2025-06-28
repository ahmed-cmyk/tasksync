import { IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProjectDto {
  @ApiPropertyOptional({
    description: 'Updated name of the project',
    example: 'New Marketing Campaign',
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({
    description: 'Updated owner ID',
    example: '0fc8de57-69df-4ab2-bdb5-8978f489af30',
  })
  @IsString()
  @IsOptional()
  ownerId?: string;
}
