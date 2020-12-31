import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private usersServise: UsersService) {}

  @Post()
  createUser(@Body() user: CreateUserDto): Promise<User> {
    return this.usersServise.createUser(user);
  }

  @Put()
  updateUser(@Body() user: UpdateUserDto): Promise<User> {
    return this.usersServise.updateUser(user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): Promise<{ id: string }> {
    return this.usersServise.deleteUser(id);
  }
}
