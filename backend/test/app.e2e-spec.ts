import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/bills (GET)', () => {
    return request(app.getHttpServer())
      .get('/bills')
      .expect(401);
  });

  it('/bills/1 (GET)', () => {
    return request(app.getHttpServer())
      .get('/bills/1')
      .expect(401);
  });

  it('/invoices (GET)', () => {
    return request(app.getHttpServer())
      .get('/invoices')
      .expect(401);
  });

  it('/invoices/1 (GET)', () => {
    return request(app.getHttpServer())
      .get('/invoices/1')
      .expect(401);
  });

  it('/auth/login (POST wrong password)', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: process.env.LOGIN_EMAIL,
        password: process.env.LOGIN_PASSWORD+"xxxxx"
      })
      .expect(401);
  });

  let accessToken = "";

  it('/auth/login (POST)', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: process.env.LOGIN_EMAIL,
        password: process.env.LOGIN_PASSWORD
      })
      .expect(201)
      .then((res) => {
        accessToken = res.body.accessToken;
      });
  });

  it('/bills (GET with Token)', () => {
    return request(app.getHttpServer())
      .get('/bills')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200);
  });

  it('/bills/1 (GET with Token)', () => {
    return request(app.getHttpServer())
      .get('/bills/1')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200);
  });

  it('/invoices (GET with Token)', () => {
    return request(app.getHttpServer())
      .get('/invoices')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200);
  });

  it('/invoices/1 (GET with Token)', () => {
    return request(app.getHttpServer())
      .get('/invoices/1')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200);
  });
});
