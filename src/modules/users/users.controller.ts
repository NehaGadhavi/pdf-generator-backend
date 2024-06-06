import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AddUserDto, UpdateUserDto } from 'src/dtos/add-user.dto';
import { GlobalResponseType } from 'src/utils/types';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getAllUsers(): GlobalResponseType {
    return await this.usersService.getAllUsers();
  }

  @Post('add')
  @UsePipes(ValidationPipe)
  async addUser(@Body() userInfo: AddUserDto): GlobalResponseType {
    return await this.usersService.addUser(userInfo);
  }

  @Patch('update/:id')
  @UsePipes(ValidationPipe)
  async updateUser(
    @Req() req: Request,
    @Body() userInfo: UpdateUserDto,
  ): GlobalResponseType {
    return await this.usersService.updateUser(Number(req.params.id), userInfo);
  }

  @Delete('delete/:id')
  async removeUser(@Param('id') id: number): GlobalResponseType {
    return await this.usersService.removeUser(id);
  }
}
