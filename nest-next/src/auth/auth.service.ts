import { HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import {
  comparePassword,
  encryptPasswordWithFixedSalt,
} from '../../utils/bcryptUtils';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(login: LoginDto): Promise<{ accessToken: string }> {
    const user = await this.userService.findUserById(login.userId);
    console.log(await encryptPasswordWithFixedSalt(user.password));
    if (!user || !(await comparePassword(login.password, user.password))) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.userId, userEmail: user.userEmail };
    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
