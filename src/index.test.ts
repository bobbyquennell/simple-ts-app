import { helloWorld } from './index';
describe('index', () => {
  it('should return hello world', () => {
    expect(helloWorld()).toBe('Hello, world');
  });
});
