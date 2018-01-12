import { Connection, Repository } from 'typeorm';
import { Events } from './events.entity';

export const eventsProviders = [
    {
        provide: 'EventsRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(Events),
        inject: ['DbConnectionToken'],
    },
];