import app from '../app.js';
import supertest from 'supertest';

const request = supertest(app);

describe('POST /weather', () => {
  it('responds with a weather message for a valid city', async () => {
    const res = await request
      .post('/weather')
      .send({ cityName: 'London' });
      
    expect(res.statusCode).toBe(200);
    expect(res.body.city).toBeDefined();
    expect(res.body.temperature).toBeDefined();
  });

  it('responds with a 404 error message for an invalid city', async () => {
    const res = await request
      .post('/weather')
      .send({ cityName: 'invalidCity' })
      .expect(404);
  });

  it('responds with status code 200 if valid response', async () => {
    const res = await request
      .post('/weather')
      .send({ cityName: 'Amsterdam' })
      .expect(200);

    expect(res.status).toBe(200);
  });
});
