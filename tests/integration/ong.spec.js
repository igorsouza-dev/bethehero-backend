import request from 'supertest';
import app from '../../src/app';

describe('ONG', () => {
  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: 'SAS',
        email: 'igorsouza@gmail.com',
        whatsapp: '6399887766',
        city: 'gurupi',
        uf: 'to',
      });
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});
