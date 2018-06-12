const userParams = require('./user-params');

describe('userParams', () => {
  it('should return user params from the requestBody', () => {
    const requestBody = { user: { email: 'a@gmail.com' } };
    const result = userParams(requestBody);
    expect(result).toEqual({ email: 'a@gmail.com' });
  });
});
