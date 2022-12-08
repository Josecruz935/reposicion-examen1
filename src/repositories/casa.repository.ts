import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Casa, CasaRelations, Habitantescasa, Residente, Visita} from '../models';
import {HabitantescasaRepository} from './habitantescasa.repository';
import {ResidenteRepository} from './residente.repository';
import {VisitaRepository} from './visita.repository';

export class CasaRepository extends DefaultCrudRepository<
  Casa,
  typeof Casa.prototype.id,
  CasaRelations
> {

  public readonly habitantescasas: HasManyRepositoryFactory<Habitantescasa, typeof Casa.prototype.id>;

  public readonly residentes: HasManyRepositoryFactory<Residente, typeof Casa.prototype.id>;

  public readonly visitas: HasManyRepositoryFactory<Visita, typeof Casa.prototype.id>;

  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource, @repository.getter('HabitantescasaRepository') protected habitantescasaRepositoryGetter: Getter<HabitantescasaRepository>, @repository.getter('ResidenteRepository') protected residenteRepositoryGetter: Getter<ResidenteRepository>, @repository.getter('VisitaRepository') protected visitaRepositoryGetter: Getter<VisitaRepository>,
  ) {
    super(Casa, dataSource);
    this.visitas = this.createHasManyRepositoryFactoryFor('visitas', visitaRepositoryGetter,);
    this.registerInclusionResolver('visitas', this.visitas.inclusionResolver);
    this.residentes = this.createHasManyRepositoryFactoryFor('residentes', residenteRepositoryGetter,);
    this.registerInclusionResolver('residentes', this.residentes.inclusionResolver);
    this.habitantescasas = this.createHasManyRepositoryFactoryFor('habitantescasas', habitantescasaRepositoryGetter,);
    this.registerInclusionResolver('habitantescasas', this.habitantescasas.inclusionResolver);
  }
}
