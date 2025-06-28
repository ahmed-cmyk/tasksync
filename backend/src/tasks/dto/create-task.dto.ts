import { IsString, IsOptional, IsInt, IsEnum } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TaskStatus } from '@prisma/client'; // make sure this import path matches your setup

export class CreateTaskDto {
  @ApiProperty({
    description: 'Title of the task',
    example: 'Fix login bug',
  })
  @IsString()
  title: string;

  @ApiPropertyOptional({
    description: 'Optional description of the task',
    example: 'The login button does not work on mobile.',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({
    description: 'Priority of the task (0 = low, 1 = medium, 2 = high)',
    example: 1,
  })
  @IsInt()
  @IsOptional()
  priority?: number;

  @ApiPropertyOptional({
    description: 'Status of the task',
    enum: TaskStatus,
    example: TaskStatus.TODO,
  })
  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;

  @ApiPropertyOptional({
    description: 'Project ID the task is linked to',
    example: 'a2f8cd9b-345d-47a2-aaa9-36cfadf3b642',
  })
  @IsString()
  @IsOptional()
  projectId?: string;

  @ApiPropertyOptional({
    description: 'User ID the task is assigned to',
    example: 'd4c1ad77-30f0-4ef8-8f96-23f7d25fc111',
  })
  @IsString()
  @IsOptional()
  assignedToId?: string;
}
