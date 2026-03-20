import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

const mod = await import('../../dist/index.js');

describe('typed-router', () => {
  it('should export createRouter', () => {
    assert.ok(mod.createRouter);
  });
});
