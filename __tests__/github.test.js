const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
// const UserService = require('../lib/services/UserService');

jest.mock('../lib/services/github');

describe('GitHub OAuth routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/api/v1/github/login should redirect to github OAuth page', async () => {
    const res = await request(app).get('/api/v1/github/login');
    expect(res.header.location).toMatch(
      /https:\/\/github.com\/login\/oauth\/authorize\?client_id=[\w\d]+&scope=user&redirect_uri=http:\/\/localhost:7890\/api\/v1\/github\/callback/i
    );
  });

  it('/api/v1/github/callback should login users and redirect to dashboard', async () => {
    const res = await request
      .agent(app)
      .get('/api/v1/github/callback?code=42')
      .redirects(1);
    expect(res.body).toEqual({
      id: expect.any(String),
      login: 'fictitious',
      email: 'test@useremail.net',
      avatar: 'http://placekitten.com/200/300',
      iat: expect.any(Number),
      exp: expect.any(Number),
    });
  });

  afterAll(() => {
    pool.end();
  });
});
