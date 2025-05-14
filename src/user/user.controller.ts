import { Test, TestingModule } from '@nestjs/testing';
import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Controller('user')
export class UserController{
  @Get()
  getAllUsers(){
    const serviceusers=new UserService();
    return serviceusers.getAllUsers();
  }
  @Get(':id')
  getUser(@Param('id')id: string)
  {
     const serviceUsers=new UserService();
     return serviceUsers.getUser(+id);
  }
}