import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';

@Controller({
  version: '1',
})
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiTags('Auth')
  @ApiBody({ type: LoginDto })
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signIn: LoginDto) {
    return this.authService.signIn(signIn);
  }
}
