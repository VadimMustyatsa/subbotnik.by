import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { validate } from 'class-validator';
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
    validate(evt).then( errors => {
      if ( errors.length > 0 ) {
        throw new Error('terrible');
      } else {
        return this.eventsRepository.save(evt);
      }
    })
  }

  update(id: number, updateEvent: any ) {
    const data = new Events();

    for (let key in updateEvent ) {
      data[key] = updateEvent[key];
    }
    validate(data, { skipMissingProperties: true }).then( errors => {
      if ( errors.length > 0 ) {
        throw new Error('terrible');
      } else {
        return this.eventsRepository.updateById(id, data);
      }
    })
  }

  delete(id:number) {
    return this.eventsRepository.removeById(id);
  }
}