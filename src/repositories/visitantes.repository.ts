import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Visitantes, VisitantesRelations} from '../models';

export class VisitantesRepository extends DefaultCrudRepository<
  Visitantes,
  typeof Visitantes.prototype.ide,
  VisitantesRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Visitantes, dataSource);
  }
}
