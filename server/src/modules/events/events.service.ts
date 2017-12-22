import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Events } from './events.entity';

@Component()
export class EventsService {

  constructor(
      @Inject('EventsRepositoryToken') private readonly eventsRepository: Repository<Events>) {}

  findById(id:number): Promise<Events> {
    return this.eventsRepository.findOneById(id);
  }

  findAll(): Promise<Events[]> {
    return this.eventsRepository.find();
  }

  create(event) {
    const evt = new Events();

    for (let key in event ) {
      evt[key] = event[key];
    }

    return this.eventsRepository.save(evt);
  }

  update(id: number, data: any ) {
    return this.eventsRepository.updateById(id, data);
  }

  delete(id:number) {
    return this.eventsRepository.removeById(id);
  }
}