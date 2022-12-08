import {Entity, model, property} from '@loopback/repository';

@model()
export class Visitantes extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  ide?: string;

  @property({
    type: 'number',
    required: true,
  })
  identificacion: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'boolean',
    default: true,
  })
  sexo?: boolean;

  @property({
    type: 'number',
    required: true,
  })
  edad: number;


  constructor(data?: Partial<Visitantes>) {
    super(data);
  }
}

export interface VisitantesRelations {
  // describe navigational properties here
}

export type VisitantesWithRelations = Visitantes & VisitantesRelations;
