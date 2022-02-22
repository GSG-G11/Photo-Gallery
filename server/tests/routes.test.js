/* eslint-disable no-undef */
const request = require('supertest');

const app = require('../app');

describe('GET Route /khaled, status 404, not exciting endpoint', () => {
  // 404
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
  // Fail /about (500)
  test('Get Route /about, status 500, failing test', (done) => {
    request(app)
      .get('/about')
      .expect(500)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
  // Success /about
  test('GET Route /about, status 200, content-type html', (done) => {
    request(app)
      .get('/about')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
  // Success root endpoint
  test('GET Route /, status 200, content-type html', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
