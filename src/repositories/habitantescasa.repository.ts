import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Habitantescasa, HabitantescasaRelations} from '../models';

export class HabitantescasaRepository extends DefaultCrudRepository<
  Habitantescasa,
  typeof Habitantescasa.prototype.id,
  HabitantescasaRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Habitantescasa, dataSource);
  }
}
