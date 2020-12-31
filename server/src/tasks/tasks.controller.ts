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
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';

@Controller('tasks')
@UseGuards(AuthGuard)
export class TasksController {
  constructor(private tasksServise: TasksService) {}

  @Post()
  createTask(
    @GetCookies('__session') cookie: AuthInfo,
    @Body() task: CreateTaskDto,
  ): Promise<Task> {
    return this.tasksServise.createTask(cookie, task);
  }

  @Put()
  updateTask(@Body() task: UpdateTaskDto): Promise<Task> {
    return this.tasksServise.updateTask(task);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): Promise<{ id: string }> {
    return this.tasksServise.deleteTask(id);
  }
}
