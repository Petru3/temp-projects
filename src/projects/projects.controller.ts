import { Controller, Get, Post, Patch, Delete, Query, ValidationPipe, Param, ParseIntPipe, UsePipes, Body, BadRequestException } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { getProjectFilterDto } from './dto/filter-projects.dto';
import { Project } from './project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectStatusValidationPipe } from './pipes/project-status-validation.pipe';
import { ProjectStatus } from './project.status.enum';

@Controller('projects')
export class ProjectsController {   
    constructor(private readonly projectsService: ProjectsService) {}

    @Get() 
    async getProjects(
        @Query(ValidationPipe) filterDto: getProjectFilterDto
    ): Promise<Project[]> {
        return this.projectsService.getProjects(filterDto);
    }

    @Get(':id')
    async getProjectById(
        @Param('id', ParseIntPipe) id: number
    ): Promise<Project> {
        return this.projectsService.getProjectById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    async createProject(
        @Body('status', ProjectStatusValidationPipe)
        @Body() createProjectDto: CreateProjectDto
    ): Promise<Project> {
        return this.projectsService.createProject(createProjectDto);
    }

    @Patch('/update/:id')
    async updateProjectById(
        @Param('id', ParseIntPipe) id: number,
        @Body('status', new ProjectStatusValidationPipe()) status: ProjectStatus, 
        @Body() updateProjectDto: UpdateProjectDto,
    ): Promise<Project> {
        return this.projectsService.updateProjectById(id, {...updateProjectDto, status});
    }

    @Delete(':id')
    async deleteProjectById(
        @Param('id', ParseIntPipe) id: number
    ): Promise<void> {
        return this.projectsService.deleteProjectById(id);
    }
}
