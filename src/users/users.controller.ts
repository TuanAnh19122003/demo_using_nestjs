import { Controller, Get, Post, Body, Patch, Param, Delete, Render, Redirect } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  @Render('users/list')
  async findAll() {
    const users = await this.usersService.findAll();
    return { users };
  }

  @Get('/create')
  @Render('users/create')
  async createForm() {
    return {};
  }

  @Post('/create')
  @Redirect('/users')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('/:id/edit')
  @Render('users/edit')
  async editForm(@Param('id') id:number) {
    const user = await this.usersService.findOne(id);
    console.log("User data: ", user);
    return { user }
  }

  @Post('/:id/edit')
  @Redirect('/users')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Get('/:id/detail')
  @Render('users/detail')
  async Detail(@Param('id') id:number) {
    const user = await this.usersService.findOne(id);
    return { user }
  }

  @Get('/:id/delete')
  @Redirect('/users')
  remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}
