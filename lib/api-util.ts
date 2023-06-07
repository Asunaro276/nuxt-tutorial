import { paths } from "~/gen/api.gen"


export type ApiPath = keyof paths

type UnionToIntersection<T> = (T extends any ? (k: T) => void : never) extends (
k: infer U
) => void
? U
: never

export type HttpMethod = keyof UnionToIntersection<paths[keyof paths]>

type GetNestedValue<
  T extends Record<string, any>,
  Keys extends (string | number)[]
> = 0 extends Keys["length"]
? T
: Keys extends [infer First, ...infer Rest]
? First extends keyof T
  ? Rest extends (string | number)[]
    ? GetNestedValue<Required<T[First]>, Rest>
    : never
  : never
: never

type GetContent<
Path extends ApiPath,
Method extends HttpMethod,
Code extends number
> = GetNestedValue<
paths,
[Path, Method, "responses", Code, "content", "application/json"]
>

export type ApiResponse<
Path extends ApiPath,
Method extends HttpMethod
> = GetContent<Path, Method, 200 | 201>

export type ApiBody<
  Path extends ApiPath,
  Method extends HttpMethod
> = GetNestedValue<
  paths,
  [Path, Method, "requestBody", "content", "application/json"]
>