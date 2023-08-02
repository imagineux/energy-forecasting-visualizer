import { type RequestHandler, rest } from 'msw';
import data from './db.json';

export const handlers: Array<RequestHandler> = [
  rest.get('/api/v1/stations', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(data.stations)
    );
  }),
  rest.get('/api/v1/forecasts', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(data.forecasts)
    );
  }),
];
