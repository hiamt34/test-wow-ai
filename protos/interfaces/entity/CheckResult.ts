// Original file: protos/entity.proto

import type { MLStatus as _entity_MLStatus } from '../entity/MLStatus';

export interface CheckResult {
  'result'?: (_entity_MLStatus | keyof typeof _entity_MLStatus);
}

export interface CheckResult__Output {
  'result'?: (_entity_MLStatus);
}
