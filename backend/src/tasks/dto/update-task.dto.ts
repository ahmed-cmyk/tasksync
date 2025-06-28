import { IsString, IsOptional, IsInt, IsEnum } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { TaskStatus } from '@prisma/client'; // adjust path if needed

export class UpdateTaskDto {
  @ApiPropertyOptional({
    description: 'Updated title of the task',
    example: 'Update login form UI',
  })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiPropertyOptional({
    description: 'Updated description of the task',
    example: 'Update styles and input behavior for better UX.',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({
    description: 'Updated priority of the task',
    example: 2,
  })
  @IsInt()
  @IsOptional()
  priority?: number;

  @ApiPropertyOptional({
    description: 'Updated task status',
    enum: TaskStatus,
    example: TaskStatus.IN_PROGRESS,
  })
  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;

  @ApiPropertyOptional({
    description: 'Updated project ID the task belongs to',
    example: 'a2f8cd9b-345d-47a2-aaa9-36cfadf3b642',
  })
  @IsString()
  @IsOptional()
  projectId?: string;

  @ApiPropertyOptional({
    description: 'Updated user ID assigned to the task',
    example: 'd4c1ad77-30f0-4ef8-8f96-23f7d25fc111',
  })
  @IsString()
  @IsOptional()
  assignedToId?: string;
}
