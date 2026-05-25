import { PRD } from '@/lib/validations/prd.schema';

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U> | undefined>
    : T[P] extends object
    ? DeepPartial<T[P]>
    : T[P];
};

export function prdToText(prd: DeepPartial<PRD>) {
  return JSON.stringify(prd, null, 2);
}
