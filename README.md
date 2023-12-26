# better-typescript-lib

An alternative TypeScript standard library with better type definitions.

## The Problem

While it is well known that TypeScript is not _very_ type safe due to the existence of `any` and other pitfalls, TypeScript's built-in type definitions are also to blame for that unsafety. For example, it is handy but very unsafe that the return type of `JSON.parse` is `any`.

The core type checker of TypeScript has been improved to be more type safe, maintaining backwards compatibility through compiler options. Unfortunately, however, the type definitions are still not very good, and are harder to improve keeping backwards compatibility.

## The Solution

This package provides an alternative set of type definitions which replaces, and is safer than TypeScript's built-in ones. With this package, TypeScript users obtain less chance of unexpectedly getting `any` values. For example, in this type definition the return type of `JSON.parse` is not `any`, but `JSONData` which represents all possible JSON data.

This package also includes other improved, stricter type definitions.

[You can see the diff from the original TypeScript lib here](./docs/diff.md).

## Installation

You only need to install `better-typescript-lib`. For npm and yarn, additional configuration is not needed; your TypeScript project automatically use `better-typescript-lib` definitions. For pnpm, see below.

```sh
npm i -D better-typescript-lib
```

[If you are using TypeScript 4.4 or prior, see the v1 branch.](https://github.com/uhyo/better-typescript-lib/tree/v1)

### How it works

Starting from TypeScript 4.5, the TypeScript compiler detects existence of `@typescript/lib-xxx` packages (e.g. `@typescript/lib-es2015`) and uses them instead of the built-in definitions. By installing `better-typescript-lib`, these package names are mapped to corresponding `@better-typescript-lib/xxx` packages.

### With pnpm

With pnpm, you must append the following line to the `.npmrc` file:

```properties
public-hoist-pattern[]=@typescript/*
```

With pnpm the `@better-typescript-lib/xxx` packages are not installed to `node_modules/@typescript/xxx` without [`public-hoist-pattern`](https://pnpm.io/npmrc#public-hoist-pattern).

This is because, unlike npm and yarn, by default pnpm does not allow your source code to access dependencies that have not been added to your project as dependencies.

## Supported TypeScript Versions

| better-typescript-lib | TypeScript      |
| --------------------- | --------------- |
| 2.6.0                 | TS 5.3 or later |
| 2.5.0                 | TS 5.2 or later |
| 2.4.0                 | TS 5.1 or later |
| 2.3.0                 | TS 5.0 or later |
| 2.2.0                 | TS 4.9 or later |
| 2.1.0                 | TS 4.6 or later |
| 2.0.0                 | TS 4.5 or later |

[If you are using TypeScript 4.4 or prior, see the v1 branch.](https://github.com/uhyo/better-typescript-lib/tree/v1)

## Concepts

Better-typescript-lib is _not_ meant to be compatible with TypeScript's built-in library. Therefore it is the most suitable to new TypeScript projects. An existing project may also adopt better-typescript-lib but additional type errors need to be fixed.

As this is only an alternative to TypeScript's built-in type definitions, we have no plan of providing any runtime implemention through better-typescript-lib.

### Versioning Policy

Improvements to type definitions may be released as a new minor version even if it may cause new type errors to existing codebases.

## Contributing

Welcome

## License

This work is based on [TypeScript](https://github.com/microsoft/TypeScript)'s standard library created by Microsoft Corporation. We modify it as programmed in this repository and redistribute it under Apache 2.0 License.
