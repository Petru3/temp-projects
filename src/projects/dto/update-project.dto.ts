import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDto } from './create-project.dto';
import { IsOptional, IsString } from 'class-validator';
import { ProjectStatus } from '../project.status.enum';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {

    @IsOptional()
    status?: ProjectStatus
}
