import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Casa} from './casa.model';

@model()
export class Habitantescasa extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  casald: string;

  @property({
    type: 'string',
    required: true,
  })
  residenteld: string;

  @property({
    type: 'string',
    required: true,
  })
  parentesco: string;

  @belongsTo(() => Casa)
  casaId: string;

  constructor(data?: Partial<Habitantescasa>) {
    super(data);
  }
}

export interface HabitantescasaRelations {
  // describe navigational properties here
}

export type HabitantescasaWithRelations = Habitantescasa & HabitantescasaRelations;
