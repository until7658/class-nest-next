import {
  Catch,
  Controller,
  Get,
  Param,
  Request,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';
import { HttpExceptionFilter } from '../filter/http-exception.filter';

@Controller('user')
@UseFilters(HttpExceptionFilter)
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
