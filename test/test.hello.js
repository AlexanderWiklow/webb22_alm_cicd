const assert = require('assert');
const app = require('../app');

describe('/hello route', () => {
  it('should respond with "Hello, World!"', async () => {
    const response = await request(app).get('/hello');

    assert.strictEqual(response.status, 200);
    assert.strictEqual(response.text, 'Hello, World!');
  });
});
