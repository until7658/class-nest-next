import { HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { AuthException } from '../exception/auth.exception';
import { AuthHttpStatus } from '../enum/auth-status.enum';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(login: LoginDto): Promise<{ accessToken: string }> {
    const user = await this.userService.findUserById(login.userId);
    if (!user || !(await bcrypt.compare(login.password, user.password))) {
      // throw new AuthException(
      //   AuthHttpStatus.UNAUTHORIZED,
      //   HttpStatus.UNAUTHORIZED,
      //   HttpStatus.UNAUTHORIZED,
      // );
      throw new UnauthorizedException();
    }
    const payload = { sub: user.userId, userEmail: user.userEmail };
    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
