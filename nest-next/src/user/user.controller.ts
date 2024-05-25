import { Controller, Get, Param, Request, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @ApiTags('User')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get(':userId')
  findUser(
    @Request() request,
    @Param('userId') userId: string,
  ): Promise<UserEntity> {
    return this.service.findUserById(userId);
  }
}
