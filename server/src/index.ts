import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as express from 'express';
import * as helmet from 'helmet';
import * as cookieParser from 'cookie-parser';

const server = express();

export const createNestServer = async (expressInstance) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );
  const configService: ConfigService = app.get(ConfigService);

  const adminConfig: ServiceAccount = {
    projectId: configService.get<string>('FIREBASE_PROJECT_ID'),
    privateKey: configService
      .get<string>('FIREBASE_PRIVATE_KEY')
      .replace(/\\n/g, '\n'),
    clientEmail: configService.get<string>('FIREBASE_CLIENT_EMAIL'),
  };

  admin.initializeApp({
    credential: admin.credential.cert(adminConfig),
  });

  app.use(cookieParser());
  app.use(helmet());
  app.enableCors({
    origin: configService.get<string>('BASE_URL'),
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, preflight',
    credentials: true,
    methods: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
  });

  return app.init();
};

createNestServer(server)
  .then(() => console.log('Nest Ready'))
  .catch((err) => console.error('Nest broken', err));

export const api = functions.https.onRequest(server);
