declare type Params<ReturnValue> = {
  development?: (() => ReturnValue) | ReturnValue;
  production?: (() => ReturnValue) | ReturnValue;
  test?: (() => ReturnValue) | ReturnValue;
};
declare const _default: <ReturnValue>({ development, production, test }: Params<ReturnValue>) => ReturnValue | null;
export default _default;
