const request = require('supertest');

const app = require('../app');

describe('Get all endpoints route', () => {
  test('Get status 404 route', (done) => {
    request(app)
      .get('/khaled')
      .expect(404)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
  test('Get status 500 route', (done) => {
    request(app)
      .get('/about')
      .expect(500)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
  test('Get status 200 route, about handler', (done) => {
    request(app)
      .get('/about')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
