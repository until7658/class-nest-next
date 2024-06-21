import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('index')
  home() {
    return {};
  }
  @Get('/test')
  @Render('test/test')
  home2() {
    return {};
  }
  @Get('/test2')
  @Render('test/index2')
  home3() {
    return {};
  }
}
