const assert = require('chai').assert;
const express = require('express');
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../server'); // Assuming your app is in a file named server.js


describe('Express App Tests', function () {
  describe('GET /', function () {
    it('should return a status code of 200 and HTML content', function (done) {
      request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /html/)
        .end(function (err, res) {
          if (err) return done(err);
          done();
        });
    });
  });

  describe('GET /profile-picture', function () {
    it('should return a status code of 200 and an image', function (done) {
      request(app)
        .get('/profile-picture')
        .expect(200)
        .expect('Content-Type', /image\/jpg/)
        .end(function (err, res) {
          if (err) return done(err);
          done();
        });
    });
  });

  
  

  describe('GET /get-profile', function () {
    it('should return a user profile', function (done) {
      request(app)
        .get('/get-profile')
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);

          // You can add additional assertions to check the response data
          expect(res.body).to.be.an('object');
          done();
        });
    });
  });
});
