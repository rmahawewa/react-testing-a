import { describe, it, expect } from 'vitest';

describe('something truthy and falsy', () => {
    it('true to be true', () => {
        expect(true).toBe(true);
    });

    it('false to be false', () => {
        expect(false).toBe(false);
    });
});

// You can see that Vitest comes with test suites (here: describe), 
// test cases (here: it) and 
// assertions (here: expect().toBe()). 
// If you have been using Jest before, you should be familiar with it, because Vitest acts as replacement for it.