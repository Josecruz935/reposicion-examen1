import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Residente, ResidenteRelations, Casa} from '../models';
import {CasaRepository} from './casa.repository';

export class ResidenteRepository extends DefaultCrudRepository<
  Residente,
  typeof Residente.prototype.id,
  ResidenteRelations
> {

  public readonly casa: BelongsToAccessor<Casa, typeof Residente.prototype.id>;

  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource, @repository.getter('CasaRepository') protected casaRepositoryGetter: Getter<CasaRepository>,
  ) {
    super(Residente, dataSource);
    this.casa = this.createBelongsToAccessorFor('casa', casaRepositoryGetter,);
    this.registerInclusionResolver('casa', this.casa.inclusionResolver);
  }
}
