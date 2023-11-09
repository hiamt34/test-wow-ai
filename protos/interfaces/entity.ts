import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { EntityServiceClient as _entity_EntityServiceClient, EntityServiceDefinition as _entity_EntityServiceDefinition } from './entity/EntityService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  entity: {
    CheckResult: MessageTypeDefinition
    Entity: MessageTypeDefinition
    EntityId: MessageTypeDefinition
    EntityInsert: MessageTypeDefinition
    EntityList: MessageTypeDefinition
    EntityResult: MessageTypeDefinition
    EntityService: SubtypeConstructor<typeof grpc.Client, _entity_EntityServiceClient> & { service: _entity_EntityServiceDefinition }
    MLStatus: EnumTypeDefinition
  }
  google: {
    protobuf: {
      Any: MessageTypeDefinition
      Empty: MessageTypeDefinition
    }
  }
}

