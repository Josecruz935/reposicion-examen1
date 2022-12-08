import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Habitantescasa, HabitantescasaRelations, Casa} from '../models';
import {CasaRepository} from './casa.repository';

export class HabitantescasaRepository extends DefaultCrudRepository<
  Habitantescasa,
  typeof Habitantescasa.prototype.id,
  HabitantescasaRelations
> {

  public readonly casa: BelongsToAccessor<Casa, typeof Habitantescasa.prototype.id>;

  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource, @repository.getter('CasaRepository') protected casaRepositoryGetter: Getter<CasaRepository>,
  ) {
    super(Habitantescasa, dataSource);
    this.casa = this.createBelongsToAccessorFor('casa', casaRepositoryGetter,);
    this.registerInclusionResolver('casa', this.casa.inclusionResolver);
  }
}
