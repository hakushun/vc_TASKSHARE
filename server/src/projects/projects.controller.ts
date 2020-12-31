import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthInfo } from 'src/auth/auth-type';
import { AuthGuard } from 'src/auth/auth.guard';
import { GetCookies } from 'src/auth/get-cookies.decorator';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './project.entity';
import { ProjectsService } from './projects.service';

@Controller('projects')
@UseGuards(AuthGuard)
export class ProjectsController {
  constructor(private projectsServise: ProjectsService) {}

  @Post()
  createProject(
    @GetCookies('__session') cookie: AuthInfo,
    @Body() project: CreateProjectDto,
  ): Promise<Project> {
    console.log('ProjectsController', cookie);
    return this.projectsServise.createProject(cookie, project);
  }

  @Put()
  updateProject(@Body() project: UpdateProjectDto): Promise<Project> {
    return this.projectsServise.updateProject(project);
  }

  @Delete(':id')
  deleteProject(@Param('id') id: string): Promise<{ id: string }> {
    return this.projectsServise.deleteProject(id);
  }
}
