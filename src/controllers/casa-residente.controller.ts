import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Casa,
  Residente,
} from '../models';
import {CasaRepository} from '../repositories';

export class CasaResidenteController {
  constructor(
    @repository(CasaRepository) protected casaRepository: CasaRepository,
  ) { }

  @get('/casas/{id}/residentes', {
    responses: {
      '200': {
        description: 'Array of Casa has many Residente',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Residente)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Residente>,
  ): Promise<Residente[]> {
    return this.casaRepository.residentes(id).find(filter);
  }

  @post('/casas/{id}/residentes', {
    responses: {
      '200': {
        description: 'Casa model instance',
        content: {'application/json': {schema: getModelSchemaRef(Residente)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Casa.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Residente, {
            title: 'NewResidenteInCasa',
            exclude: ['id'],
            optional: ['casaId']
          }),
        },
      },
    }) residente: Omit<Residente, 'id'>,
  ): Promise<Residente> {
    return this.casaRepository.residentes(id).create(residente);
  }

  @patch('/casas/{id}/residentes', {
    responses: {
      '200': {
        description: 'Casa.Residente PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Residente, {partial: true}),
        },
      },
    })
    residente: Partial<Residente>,
    @param.query.object('where', getWhereSchemaFor(Residente)) where?: Where<Residente>,
  ): Promise<Count> {
    return this.casaRepository.residentes(id).patch(residente, where);
  }

  @del('/casas/{id}/residentes', {
    responses: {
      '200': {
        description: 'Casa.Residente DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Residente)) where?: Where<Residente>,
  ): Promise<Count> {
    return this.casaRepository.residentes(id).delete(where);
  }
}
