import { Injectable } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}

  async findUserById(userId: string): Promise<UserEntity> {
    return this.userRepo.selectUserById(userId);
  }
}
