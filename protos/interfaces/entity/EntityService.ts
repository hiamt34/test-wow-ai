// Original file: protos/entity.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CheckResult as _entity_CheckResult, CheckResult__Output as _entity_CheckResult__Output } from '../entity/CheckResult';
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../google/protobuf/Empty';
import type { EntityInsert as _entity_EntityInsert, EntityInsert__Output as _entity_EntityInsert__Output } from '../entity/EntityInsert';
import type { EntityInsertList as _entity_EntityInsertList, EntityInsertList__Output as _entity_EntityInsertList__Output } from '../entity/EntityInsertList';
import type { EntityList as _entity_EntityList, EntityList__Output as _entity_EntityList__Output } from '../entity/EntityList';
import type { EntityResult as _entity_EntityResult, EntityResult__Output as _entity_EntityResult__Output } from '../entity/EntityResult';
import type { UpdateStatus as _entity_UpdateStatus, UpdateStatus__Output as _entity_UpdateStatus__Output } from '../entity/UpdateStatus';

export interface EntityServiceClient extends grpc.Client {
  Check(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_entity_CheckResult__Output>): grpc.ClientUnaryCall;
  Check(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_entity_CheckResult__Output>): grpc.ClientUnaryCall;
  Check(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_entity_CheckResult__Output>): grpc.ClientUnaryCall;
  Check(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_entity_CheckResult__Output>): grpc.ClientUnaryCall;
  check(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_entity_CheckResult__Output>): grpc.ClientUnaryCall;
  check(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_entity_CheckResult__Output>): grpc.ClientUnaryCall;
  check(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_entity_CheckResult__Output>): grpc.ClientUnaryCall;
  check(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_entity_CheckResult__Output>): grpc.ClientUnaryCall;
  
  GetAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_entity_EntityList__Output>): grpc.ClientUnaryCall;
  GetAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_entity_EntityList__Output>): grpc.ClientUnaryCall;
  GetAll(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_entity_EntityList__Output>): grpc.ClientUnaryCall;
  GetAll(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_entity_EntityList__Output>): grpc.ClientUnaryCall;
  getAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_entity_EntityList__Output>): grpc.ClientUnaryCall;
  getAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_entity_EntityList__Output>): grpc.ClientUnaryCall;
  getAll(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_entity_EntityList__Output>): grpc.ClientUnaryCall;
  getAll(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_entity_EntityList__Output>): grpc.ClientUnaryCall;
  
  Insert(argument: _entity_EntityInsert, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_entity_EntityResult__Output>): grpc.ClientUnaryCall;
  Insert(argument: _entity_EntityInsert, metadata: grpc.Metadata, callback: grpc.requestCallback<_entity_EntityResult__Output>): grpc.ClientUnaryCall;
  Insert(argument: _entity_EntityInsert, options: grpc.CallOptions, callback: grpc.requestCallback<_entity_EntityResult__Output>): grpc.ClientUnaryCall;
  Insert(argument: _entity_EntityInsert, callback: grpc.requestCallback<_entity_EntityResult__Output>): grpc.ClientUnaryCall;
  insert(argument: _entity_EntityInsert, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_entity_EntityResult__Output>): grpc.ClientUnaryCall;
  insert(argument: _entity_EntityInsert, metadata: grpc.Metadata, callback: grpc.requestCallback<_entity_EntityResult__Output>): grpc.ClientUnaryCall;
  insert(argument: _entity_EntityInsert, options: grpc.CallOptions, callback: grpc.requestCallback<_entity_EntityResult__Output>): grpc.ClientUnaryCall;
  insert(argument: _entity_EntityInsert, callback: grpc.requestCallback<_entity_EntityResult__Output>): grpc.ClientUnaryCall;
  
  InsertMany(argument: _entity_EntityInsertList, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_entity_EntityList__Output>): grpc.ClientUnaryCall;
  InsertMany(argument: _entity_EntityInsertList, metadata: grpc.Metadata, callback: grpc.requestCallback<_entity_EntityList__Output>): grpc.ClientUnaryCall;
  InsertMany(argument: _entity_EntityInsertList, options: grpc.CallOptions, callback: grpc.requestCallback<_entity_EntityList__Output>): grpc.ClientUnaryCall;
  InsertMany(argument: _entity_EntityInsertList, callback: grpc.requestCallback<_entity_EntityList__Output>): grpc.ClientUnaryCall;
  insertMany(argument: _entity_EntityInsertList, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_entity_EntityList__Output>): grpc.ClientUnaryCall;
  insertMany(argument: _entity_EntityInsertList, metadata: grpc.Metadata, callback: grpc.requestCallback<_entity_EntityList__Output>): grpc.ClientUnaryCall;
  insertMany(argument: _entity_EntityInsertList, options: grpc.CallOptions, callback: grpc.requestCallback<_entity_EntityList__Output>): grpc.ClientUnaryCall;
  insertMany(argument: _entity_EntityInsertList, callback: grpc.requestCallback<_entity_EntityList__Output>): grpc.ClientUnaryCall;
  
  UpdateStatus(argument: _entity_UpdateStatus, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_entity_CheckResult__Output>): grpc.ClientUnaryCall;
  UpdateStatus(argument: _entity_UpdateStatus, metadata: grpc.Metadata, callback: grpc.requestCallback<_entity_CheckResult__Output>): grpc.ClientUnaryCall;
  UpdateStatus(argument: _entity_UpdateStatus, options: grpc.CallOptions, callback: grpc.requestCallback<_entity_CheckResult__Output>): grpc.ClientUnaryCall;
  UpdateStatus(argument: _entity_UpdateStatus, callback: grpc.requestCallback<_entity_CheckResult__Output>): grpc.ClientUnaryCall;
  updateStatus(argument: _entity_UpdateStatus, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_entity_CheckResult__Output>): grpc.ClientUnaryCall;
  updateStatus(argument: _entity_UpdateStatus, metadata: grpc.Metadata, callback: grpc.requestCallback<_entity_CheckResult__Output>): grpc.ClientUnaryCall;
  updateStatus(argument: _entity_UpdateStatus, options: grpc.CallOptions, callback: grpc.requestCallback<_entity_CheckResult__Output>): grpc.ClientUnaryCall;
  updateStatus(argument: _entity_UpdateStatus, callback: grpc.requestCallback<_entity_CheckResult__Output>): grpc.ClientUnaryCall;
  
}

export interface EntityServiceHandlers extends grpc.UntypedServiceImplementation {
  Check: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _entity_CheckResult>;
  
  GetAll: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _entity_EntityList>;
  
  Insert: grpc.handleUnaryCall<_entity_EntityInsert__Output, _entity_EntityResult>;
  
  InsertMany: grpc.handleUnaryCall<_entity_EntityInsertList__Output, _entity_EntityList>;
  
  UpdateStatus: grpc.handleUnaryCall<_entity_UpdateStatus__Output, _entity_CheckResult>;
  
}

export interface EntityServiceDefinition extends grpc.ServiceDefinition {
  Check: MethodDefinition<_google_protobuf_Empty, _entity_CheckResult, _google_protobuf_Empty__Output, _entity_CheckResult__Output>
  GetAll: MethodDefinition<_google_protobuf_Empty, _entity_EntityList, _google_protobuf_Empty__Output, _entity_EntityList__Output>
  Insert: MethodDefinition<_entity_EntityInsert, _entity_EntityResult, _entity_EntityInsert__Output, _entity_EntityResult__Output>
  InsertMany: MethodDefinition<_entity_EntityInsertList, _entity_EntityList, _entity_EntityInsertList__Output, _entity_EntityList__Output>
  UpdateStatus: MethodDefinition<_entity_UpdateStatus, _entity_CheckResult, _entity_UpdateStatus__Output, _entity_CheckResult__Output>
}
