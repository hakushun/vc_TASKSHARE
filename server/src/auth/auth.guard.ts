import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import * as admin from 'firebase-admin';

async function validateRequest(req: Request): Promise<boolean> {
  if (!req.cookies.__session) {
    return false;
  }
  const session = req.cookies.__session;
  const token = session.token;
  const decodeToken = await admin.auth().verifyIdToken(token);

  if (!decodeToken) {
    return false;
  }
  return true;
}

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    return validateRequest(request);
  }
}
