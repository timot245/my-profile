import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register() {
    // TODO: Implement user registration
    return this.authService.register();
  }

  @Post('login')
  login() {
    // TODO: Implement user login
    return this.authService.login();
  }
}
