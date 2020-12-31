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
import { ActivitiesService } from './activities.service';
import { Activity } from './activity.entity';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';

@Controller('activities')
@UseGuards(AuthGuard)
export class ActivitiesController {
  constructor(private activitiesService: ActivitiesService) {}

  @Post()
  createActivity(
    @GetCookies('__session') cookie: AuthInfo,
    @Body() activity: CreateActivityDto,
  ): Promise<Activity> {
    return this.activitiesService.createActivity(cookie, activity);
  }

  @Put()
  updateActivity(@Body() activity: UpdateActivityDto): Promise<Activity> {
    return this.activitiesService.updateActivity(activity);
  }

  @Delete(':id')
  deleteActivity(@Param('id') id: string): Promise<{ id: string }> {
    return this.activitiesService.deleteActivity(id);
  }
}
