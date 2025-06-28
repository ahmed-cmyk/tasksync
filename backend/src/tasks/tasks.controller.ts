import { ApiBody } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task as TaskModel } from '@prisma/client';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get('')
  async getTasks(
    @Query('skip') skip?: string,
    @Query('take') take?: string,
    @Query('cursor') cursor?: string,
    @Query('orderBy') orderBy?: 'asc' | 'desc',
  ) {
    return this.taskService.tasks({
      skip: skip ? parseInt(skip, 10) : undefined,
      take: take ? parseInt(take, 10) : undefined,
      cursor: cursor ? { id: cursor } : undefined,
      orderBy: orderBy ? { id: orderBy } : undefined,
    });
  }

  @Get(':id')
  async getTask(@Param('id') id: string): Promise<TaskModel | null> {
    return this.taskService.task({ id });
  }

  @Post('')
  @ApiBody({ type: CreateTaskDto })
  async createTask(@Body() data: CreateTaskDto): Promise<TaskModel> {
    return this.taskService.createTask(data);
  }

  @Put(':id')
  @ApiBody({ type: UpdateTaskDto })
  async updateTask(
    @Param('id') id: string,
    @Body() data: UpdateTaskDto,
  ): Promise<TaskModel> {
    return this.taskService.updateTask({
      where: { id },
      data,
    });
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<TaskModel> {
    return this.taskService.deleteTask({ id });
  }
}
