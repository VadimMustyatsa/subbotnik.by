import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { eventsProviders } from './events.providers';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';

@Module({
    modules: [DatabaseModule],
    controllers: [EventsController],
    components: [...eventsProviders, EventsService],
})
export class EventsModule {}