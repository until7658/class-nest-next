import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from '../../auth/dto/login.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async selectUserById(userId: string): Promise<UserEntity> {
    return await this.userRepo.findOneBy({ userId });
  }

  async selectUserLogin(userId, password): Promise<UserEntity> {
    return await this.userRepo.findOneBy({ userId, password });
  }
}
