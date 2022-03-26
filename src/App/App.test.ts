import { App } from './index';

describe('App test', () => {
    test('render test', () => {
        new App(document.body);

        expect(document.body.textContent)
            .toContain('Hello, My Vanilla JS!');
    });
});