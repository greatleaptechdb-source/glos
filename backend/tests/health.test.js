const request = require('supertest');
const app = require('../app');

describe('Health Check', () => {
    it('should return 200 and status ok', async () => {
        const response = await request(app).get('/api/health');
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('ok');
    });
});