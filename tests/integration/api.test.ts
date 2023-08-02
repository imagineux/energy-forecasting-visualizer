import { afterEach, beforeEach, expect, test } from 'vitest'

import { setupServer } from 'msw/node'
import {handlers} from '../../src/mocks/handlers'

let server: any

beforeEach(() => {
  server = setupServer(...handlers)
  server.listen()
})

afterEach(() => {
  server.close()
})

async function fetchJson(url: string) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(response.statusText);
  return response.json();
}

test('returns stations data', async () => {
  const data = await fetchJson("http://localhost:3000/api/v1/stations");
  expect(data).toBeDefined();
  expect(data.length).toBeGreaterThan(0);
});

test('returns forecasts data', async () => {
  const data = await fetchJson("http://localhost:3000/api/v1/stations");
  expect(data).toBeDefined();
  expect(data.length).toBeGreaterThan(0);
});
