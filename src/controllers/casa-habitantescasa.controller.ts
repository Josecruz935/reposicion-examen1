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
  Habitantescasa,
} from '../models';
import {CasaRepository} from '../repositories';

export class CasaHabitantescasaController {
  constructor(
    @repository(CasaRepository) protected casaRepository: CasaRepository,
  ) { }

  @get('/casas/{id}/habitantescasas', {
    responses: {
      '200': {
        description: 'Array of Casa has many Habitantescasa',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Habitantescasa)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Habitantescasa>,
  ): Promise<Habitantescasa[]> {
    return this.casaRepository.habitantescasas(id).find(filter);
  }

  @post('/casas/{id}/habitantescasas', {
    responses: {
      '200': {
        description: 'Casa model instance',
        content: {'application/json': {schema: getModelSchemaRef(Habitantescasa)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Casa.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Habitantescasa, {
            title: 'NewHabitantescasaInCasa',
            exclude: ['id'],
            optional: ['casaId']
          }),
        },
      },
    }) habitantescasa: Omit<Habitantescasa, 'id'>,
  ): Promise<Habitantescasa> {
    return this.casaRepository.habitantescasas(id).create(habitantescasa);
  }

  @patch('/casas/{id}/habitantescasas', {
    responses: {
      '200': {
        description: 'Casa.Habitantescasa PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Habitantescasa, {partial: true}),
        },
      },
    })
    habitantescasa: Partial<Habitantescasa>,
    @param.query.object('where', getWhereSchemaFor(Habitantescasa)) where?: Where<Habitantescasa>,
  ): Promise<Count> {
    return this.casaRepository.habitantescasas(id).patch(habitantescasa, where);
  }

  @del('/casas/{id}/habitantescasas', {
    responses: {
      '200': {
        description: 'Casa.Habitantescasa DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Habitantescasa)) where?: Where<Habitantescasa>,
  ): Promise<Count> {
    return this.casaRepository.habitantescasas(id).delete(where);
  }
}
