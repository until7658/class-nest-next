import { Controller, Get, Param, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get(':userId')
  findUser(
    @Request() request,
    @Param('userId') userId: string,
  ): Promise<UserEntity> {
    return this.service.findUserById(userId);
  }
}
