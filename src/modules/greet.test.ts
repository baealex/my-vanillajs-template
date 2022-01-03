import { getGreetContent } from './greet';

test('greet text', () => {
    expect(getGreetContent()).toBe('Hello, World!');
})