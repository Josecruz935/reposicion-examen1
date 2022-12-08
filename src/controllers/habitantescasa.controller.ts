import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Habitantescasa} from '../models';
import {HabitantescasaRepository} from '../repositories';

export class HabitantescasaController {
  constructor(
    @repository(HabitantescasaRepository)
    public habitantescasaRepository : HabitantescasaRepository,
  ) {}

  @post('/habitantescasas')
  @response(200, {
    description: 'Habitantescasa model instance',
    content: {'application/json': {schema: getModelSchemaRef(Habitantescasa)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Habitantescasa, {
            title: 'NewHabitantescasa',
            exclude: ['id'],
          }),
        },
      },
    })
    habitantescasa: Omit<Habitantescasa, 'id'>,
  ): Promise<Habitantescasa> {
    return this.habitantescasaRepository.create(habitantescasa);
  }

  @get('/habitantescasas/count')
  @response(200, {
    description: 'Habitantescasa model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Habitantescasa) where?: Where<Habitantescasa>,
  ): Promise<Count> {
    return this.habitantescasaRepository.count(where);
  }

  @get('/habitantescasas')
  @response(200, {
    description: 'Array of Habitantescasa model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Habitantescasa, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Habitantescasa) filter?: Filter<Habitantescasa>,
  ): Promise<Habitantescasa[]> {
    return this.habitantescasaRepository.find(filter);
  }

  @patch('/habitantescasas')
  @response(200, {
    description: 'Habitantescasa PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Habitantescasa, {partial: true}),
        },
      },
    })
    habitantescasa: Habitantescasa,
    @param.where(Habitantescasa) where?: Where<Habitantescasa>,
  ): Promise<Count> {
    return this.habitantescasaRepository.updateAll(habitantescasa, where);
  }

  @get('/habitantescasas/{id}')
  @response(200, {
    description: 'Habitantescasa model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Habitantescasa, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Habitantescasa, {exclude: 'where'}) filter?: FilterExcludingWhere<Habitantescasa>
  ): Promise<Habitantescasa> {
    return this.habitantescasaRepository.findById(id, filter);
  }

  @patch('/habitantescasas/{id}')
  @response(204, {
    description: 'Habitantescasa PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Habitantescasa, {partial: true}),
        },
      },
    })
    habitantescasa: Habitantescasa,
  ): Promise<void> {
    await this.habitantescasaRepository.updateById(id, habitantescasa);
  }

  @put('/habitantescasas/{id}')
  @response(204, {
    description: 'Habitantescasa PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() habitantescasa: Habitantescasa,
  ): Promise<void> {
    await this.habitantescasaRepository.replaceById(id, habitantescasa);
  }

  @del('/habitantescasas/{id}')
  @response(204, {
    description: 'Habitantescasa DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.habitantescasaRepository.deleteById(id);
  }
}
