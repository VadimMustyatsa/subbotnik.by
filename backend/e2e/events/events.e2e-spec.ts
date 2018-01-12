import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { EventsModule } from '../../src/modules/events/events.module';
import { EventsService } from '../../src/modules/events/events.service';

describe('Events', () => {
    const server = express();
    server.use(bodyParser.json());

    const eventsService = { findAll: () => ['test'] };

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            modules: [EventsModule],
          })
          .overrideComponent(EventsService).useValue(eventsService)
          .compile();

        const app = module.createNestApplication(server);
        await app.init();
    });

    it(`/GET events`, () => {
        return request(server)
            .get('/events')
            .expect(200)
            .expect({
              data: eventsService.findAll(),
            });
    });
});