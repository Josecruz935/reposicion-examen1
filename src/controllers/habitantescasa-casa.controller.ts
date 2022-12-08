import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Habitantescasa,
  Casa,
} from '../models';
import {HabitantescasaRepository} from '../repositories';

export class HabitantescasaCasaController {
  constructor(
    @repository(HabitantescasaRepository)
    public habitantescasaRepository: HabitantescasaRepository,
  ) { }

  @get('/habitantescasas/{id}/casa', {
    responses: {
      '200': {
        description: 'Casa belonging to Habitantescasa',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Casa)},
          },
        },
      },
    },
  })
  async getCasa(
    @param.path.string('id') id: typeof Habitantescasa.prototype.id,
  ): Promise<Casa> {
    return this.habitantescasaRepository.casa(id);
  }
}
