import { Controller, Get, Post, Render, Redirect, Body } from '@nestjs/common';
import { UsersService } from '../users.service';
import { RegisterUserDto } from '../dto/register.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly userService: UsersService) {}
    @Get("register")
    @Render('auth/register')
    showFormregister() {
        return {};
    }

    @Post("register")
    @Redirect("/auth/register")
    register(@Body() registerUserDto: RegisterUserDto)  {
        this.userService.createUser(registerUserDto);
    }
}
