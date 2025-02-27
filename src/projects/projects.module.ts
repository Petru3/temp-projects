import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './project.entity';
import { ProjectsRepository } from './projects.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Project]),
  ],
  controllers: [ProjectsController],
  providers: [
    ProjectsService,
    ProjectsRepository
  ],
  exports: [ProjectsService]
})
export class ProjectsModule {}
