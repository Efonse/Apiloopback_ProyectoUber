import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Ruta} from './ruta.model';

@model()
export class Servicio extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'date',
    required: true,
  })
  horaInicio: string;

  @property({
    type: 'date',
    required: true,
  })
  horaFin: string;

  @property({
    type: 'string',
    required: true,
  })
  placaVehiculo: string;

  @property({
    type: 'string',
    required: true,
  })
  nombreConductor: string;

  @property({
    type: 'string',
    required: true,
  })
  dineroRecogido: string;

  @belongsTo(() => Ruta, {name: 'rutaValor'})
  ruta: string;

  constructor(data?: Partial<Servicio>) {
    super(data);
  }
}

export interface ServicioRelations {
  // describe navigational properties here
}

export type ServicioWithRelations = Servicio & ServicioRelations;
