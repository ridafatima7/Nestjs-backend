import { Test, TestingModule } from '@nestjs/testing';
import { Controller, Get, NotFoundException, Param, Post,Body, ParseIntPipe } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { userDTO } from './dto/user.dto';

@Controller('user')
export class UserController{
    // Dependency Injection
    constructor(private readonly userService:UserService){}
  @Get()
  getAllUsers(){
    return this.userService.getAllUsers();
  }
  @Get(':id')
  getUser(@Param('id',ParseIntPipe)id: number)
  {
    try{
        return this.userService.getUser(id);
    }
    catch(error){
      throw new NotFoundException(error.message);
    }
  }
  @Post()
  addUser(@Body() user:userDTO){
    return this.userService.addUser(user);
  }
}