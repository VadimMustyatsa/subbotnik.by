import { Controller, Get, Post, Put, Delete, Body, Query, Param } from '@nestjs/common';
import { EventsService } from './events.service';
import { Events } from './events.entity';

@Controller('events')
export class EventsController {
    constructor(private readonly eventsService: EventsService) {
    }

    @Get(':id')
    async getById(@Param('id') id: number): Promise<Events> {
        return await this.eventsService.findById(id);
    }
        
    @Get()
    async getAll(): Promise<Events[]> {
        return await this.eventsService.findAll();
    }

    @Post()
    async create(@Body() createEventDto: any) {
        return await this.eventsService.create(createEventDto);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() updateEvent: any) {
        return await this.eventsService.update(id, updateEvent);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return await this.eventsService.delete(id);
    }
}
