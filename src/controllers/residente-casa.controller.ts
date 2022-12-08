import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Residente,
  Casa,
} from '../models';
import {ResidenteRepository} from '../repositories';

export class ResidenteCasaController {
  constructor(
    @repository(ResidenteRepository)
    public residenteRepository: ResidenteRepository,
  ) { }

  @get('/residentes/{id}/casa', {
    responses: {
      '200': {
        description: 'Casa belonging to Residente',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Casa)},
          },
        },
      },
    },
  })
  async getCasa(
    @param.path.string('id') id: typeof Residente.prototype.id,
  ): Promise<Casa> {
    return this.residenteRepository.casa(id);
  }
}
