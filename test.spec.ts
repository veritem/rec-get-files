import walk from './index';

test('should return files', () => {
  const files = walk('./dist/');
  expect(files.length).toBe(2);
});
