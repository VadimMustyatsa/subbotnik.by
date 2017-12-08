import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Events } from './events.entity';

@Component()
export class EventsService {

  constructor(
      @Inject('EventsRepositoryToken') private readonly eventsRepository: Repository<Events>) {}

  find(id:number): Promise<Events[]|Events> {
    if (id) {
      return this.eventsRepository.findOneById(id);
    }
    return this.eventsRepository.find();
  }

  create(event) {
    const evt = new Events();

    for (let key in event ) {
      evt[key] = event[key];
    }

    return this.eventsRepository.save(evt);
  }

  updateOne(data: any, id: number) {
    return this.eventsRepository.updateById(id, data);
  }

  deletesmth(id:number) {
    return this.eventsRepository.removeById(id);
  }
}