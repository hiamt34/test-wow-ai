// Original file: protos/entity.proto

import type { MLStatus as _entity_MLStatus } from '../entity/MLStatus';

export interface UpdateStatus {
  'status'?: (_entity_MLStatus | keyof typeof _entity_MLStatus);
}

export interface UpdateStatus__Output {
  'status'?: (_entity_MLStatus);
}
