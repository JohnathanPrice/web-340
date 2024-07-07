const http = require('http');
const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals');
const server = require('../src/server');

let serverInstance;

beforeAll((done) => {
    process.env.PORT = 3001; // Use a different port for testing
    serverInstance = server.listen(3001, done);
});

afterAll((done) => {
    serverInstance.close(done);
});

describe('Character Creation API', () => {
    it('should create a character', (done) => {
        const data = JSON.stringify({
            class: 'Warrior',
            gender: 'Male',
            funFact: 'Loves to fight dragons'
        });

        const options = {
            hostname: 'localhost',
            port: 3001,
            path: '/create-character',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        };

        const req = http.request(options, res => {
            let responseBody = '';
            res.on('data', chunk => {
                responseBody += chunk;
            });

            res.on('end', () => {
                const response = JSON.parse(responseBody);
                expect(res.statusCode).toBe(201);
                expect(response.message).toBe('Character created');
                expect(response.character).toEqual({
                    class: 'Warrior',
                    gender: 'Male',
                    funFact: 'Loves to fight dragons'
                });
                done();
            });
        });

        req.write(data);
        req.end();
    });

    it('should confirm character creation', (done) => {
        const options = {
            hostname: 'localhost',
            port: 3001,
            path: '/confirm-character',
            method: 'POST'
        };

        const req = http.request(options, res => {
            let responseBody = '';
            res.on('data', chunk => {
                responseBody += chunk;
            });

            res.on('end', () => {
                const response = JSON.parse(responseBody);
                expect(res.statusCode).toBe(200);
                expect(response.message).toBe('Character creation confirmed');
                expect(response.character).toEqual({
                    class: 'Warrior',
                    gender: 'Male',
                    funFact: 'Loves to fight dragons'
                });
                done();
            });
        });

        req.end();
    });

    it('should view the created character', (done) => {
        const options = {
            hostname: 'localhost',
            port: 3001,
            path: '/view-character',
            method: 'GET'
        };

        const req = http.request(options, res => {
            let responseBody = '';
            res.on('data', chunk => {
                responseBody += chunk;
            });

            res.on('end', () => {
                const response = JSON.parse(responseBody);
                expect(res.statusCode).toBe(200);
                expect(response.character).toEqual({
                    class: 'Warrior',
                    gender: 'Male',
                    funFact: 'Loves to fight dragons'
                });
                done();
            });
        });

        req.end();
    });
});