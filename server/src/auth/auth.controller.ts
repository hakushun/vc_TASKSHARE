import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthInfo } from './auth-type';

@Controller('auth')
export class AuthController {
  @Post('/login')
  setCookie(
    @Res({ passthrough: true }) res: Response,
    @Body() authInfo: AuthInfo,
  ) {
    // Set session expiration to 1 hour.
    const expiresIn = ((60 * 60 * 24 * 1) / 24) * 1000;
    // localhostの時はsecureをfalseにする
    const options = {
      maxAge: expiresIn,
      httpOnly: true,
      secure: true,
      sameSite: 'none' as const,
    };
    res.cookie('__session', authInfo, options);
  }

  @Post('/logout')
  removeCookie(@Res({ passthrough: true }) res: Response) {
    res.cookie('__session', '');
  }
}
