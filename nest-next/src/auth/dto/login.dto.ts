import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    example: 'until',
    description: '로그인 아이디',
  })
  @IsString()
  userId: string;

  @ApiProperty({
    example: '로그인 패스워드',
  })
  @IsString()
  password: string;
}
