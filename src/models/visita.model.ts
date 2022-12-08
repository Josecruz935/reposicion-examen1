import {Entity, model, property} from '@loopback/repository';

@model()
export class Visita extends Entity {
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
  fechadeentrada: string;

  @property({
    type: 'string',
    required: true,
  })
  fechadesalida: string;

  @property({
    type: 'string',
    required: true,
  })
  visitandelt: string;

  @property({
    type: 'string',
    required: true,
  })
  casald: string;

  @property({
    type: 'string',
    required: true,
  })
  codigqro: string;

  @property({
    type: 'boolean',
    default: true,
  })
  estado?: boolean;


  constructor(data?: Partial<Visita>) {
    super(data);
  }
}

export interface VisitaRelations {
  // describe navigational properties here
}

export type VisitaWithRelations = Visita & VisitaRelations;
