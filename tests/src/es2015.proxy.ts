import { expectType } from "tsd";

// ProxyHandler
new Proxy(
  {},
  {
    setPrototypeOf(t, v) {
      expectType<object | null>(v);
      return true;
    },
    get(t, p, receiver) {
      expectType<unknown>(receiver);
    },
    set(t, p, value, receiver) {
      expectType<unknown>(value);
      expectType<unknown>(receiver);
      return true;
    },
    apply(t, thisArg, argArray) {
      expectType<unknown>(thisArg);
      expectType<unknown[]>(argArray);
    },
    construct(t, argArray, newTarget) {
      expectType<unknown[]>(argArray);
      expectType<unknown>(newTarget);
      return {};
    },
  },
);
