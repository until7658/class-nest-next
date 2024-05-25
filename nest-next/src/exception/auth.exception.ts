import { HttpException, HttpStatus } from '@nestjs/common';

export class AuthException extends HttpException {
  constructor(message: any, error: any, errorCode: HttpStatus) {
    super(
      HttpException.createBody(message, error, errorCode),
      HttpStatus.BAD_REQUEST,
    );
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
