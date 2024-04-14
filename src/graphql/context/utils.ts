import { v4 as uuid } from 'uuid';

import { type Apollo, type Identifier } from '@project/types';

export const createRequest = (): Apollo.Request => ({
  id: uuid() as Identifier.Request,
});
