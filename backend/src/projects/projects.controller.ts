import { ApiBody } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post, Put, Delete, Query } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { Prisma, Project as ProjectModel } from '@prisma/client';
import { ProjectsService } from './projects.service';
import { UpdateProjectDto } from './dto/update-project.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private projectService: ProjectsService) {}

  @Get('')
  async getProjects(
    @Query('skip') skip?: string,
    @Query('take') take?: string,
    @Query('cursor') cursor?: string,
    @Query('orderBy') orderBy?: string,
  ) {
    return this.projectService.projects({
      skip: skip ? parseInt(skip) : undefined,
      take: take ? parseInt(take) : undefined,
      cursor: cursor ? { id: cursor } : undefined,
      orderBy: orderBy ? { id: orderBy as 'asc' | 'desc' } : undefined,
    });
  }

  @Get(':id')
  async getProject(id: string) {
    return this.projectService.project({ id });
  }

  @Post('')
  @ApiBody({ type: CreateProjectDto })
  async createProject(@Body() data: Prisma.ProjectCreateInput): Promise<ProjectModel> {
    return this.projectService.createProject(data);
  }

  @Put(':id')
  @ApiBody({ type: UpdateProjectDto })
  async updateProject(@Param() id: string, data: Prisma.ProjectUpdateInput): Promise<ProjectModel>{
    return this.projectService.updateProject({
      where: { id },
      data,
    });
  }

  @Delete(':id')
  async deleteProject(@Param() id: string): Promise<ProjectModel> {
    return this.projectService.deleteProject({ id });
  }
}
