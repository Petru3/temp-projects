import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateProjectDto {
    @IsNotEmpty()
    @MaxLength(255)
    title: string;

    @IsNotEmpty()
    @MaxLength(500)
    description: string;
}
