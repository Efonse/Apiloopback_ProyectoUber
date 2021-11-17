import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Ruta, RutaRelations, Estacion} from '../models';
import {EstacionRepository} from './estacion.repository';

export class RutaRepository extends DefaultCrudRepository<
  Ruta,
  typeof Ruta.prototype.id,
  RutaRelations
> {

  public readonly origenSalida: BelongsToAccessor<Estacion, typeof Ruta.prototype.id>;

  public readonly destinoLlegada: BelongsToAccessor<Estacion, typeof Ruta.prototype.id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('EstacionRepository') protected estacionRepositoryGetter: Getter<EstacionRepository>,
  ) {
    super(Ruta, dataSource);
    this.destinoLlegada = this.createBelongsToAccessorFor('destinoLlegada', estacionRepositoryGetter,);
    this.registerInclusionResolver('destinoLlegada', this.destinoLlegada.inclusionResolver);
    this.origenSalida = this.createBelongsToAccessorFor('origenSalida', estacionRepositoryGetter,);
    this.registerInclusionResolver('origenSalida', this.origenSalida.inclusionResolver);
  }
}
