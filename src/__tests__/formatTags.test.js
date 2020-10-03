import { formatQuery } from '../helpers/index';

test('should format query', () => {
  const query = 'lion sea sky #$@jj 54';
  expect(formatQuery(query)).toBe('lion,sea,sky,jj,54')
});
