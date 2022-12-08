import {Entity, model, property, hasMany} from '@loopback/repository';
import {Habitantescasa} from './habitantescasa.model';
import {Residente} from './residente.model';
import {Visita} from './visita.model';

@model()
export class Casa extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  numero: number;

  @property({
    type: 'number',
    required: true,
  })
  bloque: number;

  @property({
    type: 'number',
    required: true,
  })
  calle: number;

  @property({
    type: 'string',
    required: true,
  })
  referencia: string;

  @hasMany(() => Habitantescasa)
  habitantescasas: Habitantescasa[];

  @hasMany(() => Residente)
  residentes: Residente[];

  @hasMany(() => Visita, {keyTo: '(casaId)'})
  visitas: Visita[];

  constructor(data?: Partial<Casa>) {
    super(data);
  }
}

export interface CasaRelations {
  // describe navigational properties here
}

export type CasaWithRelations = Casa & CasaRelations;
