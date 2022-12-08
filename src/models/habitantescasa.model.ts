import {Entity, model, property} from '@loopback/repository';

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


  constructor(data?: Partial<Habitantescasa>) {
    super(data);
  }
}

export interface HabitantescasaRelations {
  // describe navigational properties here
}

export type HabitantescasaWithRelations = Habitantescasa & HabitantescasaRelations;
