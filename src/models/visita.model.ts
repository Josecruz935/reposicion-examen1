import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Casa} from './casa.model';

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
  @property({
    type: 'string',
  })
    (casaId)
?
: string;
  @belongsTo(() => Casa)
  casaId: string;

  constructor(data?: Partial<Visita>) {
    super(data);
  }
}

export interface VisitaRelations {
  // describe navigational properties here
}

export type VisitaWithRelations = Visita & VisitaRelations;
