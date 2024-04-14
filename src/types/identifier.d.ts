import { type Brand } from './brand';

export namespace Identifier {
  export type Request = Brand<string, 'request.id'>;
}
