import { Test, TestingModule } from '@nestjs/testing';
import { Controller, Get, NotFoundException, Param, Post,Body, ParseIntPipe, ValidationPipe, UseGuards } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { userDTO } from './dto/user.dto';
import { FirewallGuard } from 'src/firewall/firewall.guard';

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
  @UseGuards(FirewallGuard)
  @Post()
  addUser(@Body(new ValidationPipe({transform:true})) user:userDTO){
    return this.userService.addUser(user);
  }
}