import { describe, it, expect } from 'vitest';
import { greet } from './index';

describe('greet', () => {
  it('returns the hello world message', () => {
    expect(greet()).toBe('Hello, World!');
  });
});
