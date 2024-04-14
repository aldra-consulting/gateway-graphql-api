import { type Nullable, type Identifiable, type Identifier } from '..';

export namespace Apollo {
  interface Request extends Identifiable<Identifier.Request> {}

  export interface Context {
    request: Request;
    authorization: Nullable<string>;
  }
}
