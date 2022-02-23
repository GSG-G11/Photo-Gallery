/* eslint-disable no-undef */
const request = require('supertest');

const app = require('../app');

describe('Test server endpoints', () => {
  // 404
  test('GET Route /khaled, status 404, not exciting endpoint', (done) => {
    request(app)
      .get('/khaled')
      .expect(404)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
  // /about
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
  // POST
  test('POST Route /search, status 200, content-type json', (done) => {
    request(app)
      .post('/search')
      .expect(200)
      .expect('Content-Type', /json/)
      .send({ searchTerm: 'cat', limit: 1 })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.data.length).toBe(1);
        done();
      });
  });
});
