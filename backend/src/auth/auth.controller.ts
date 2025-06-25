import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get()
  test(): string {
    return 'This is an auth test';
  }
}
