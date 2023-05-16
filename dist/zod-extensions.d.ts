import { ParameterObject, SchemaObject } from 'openapi3-ts/oas30';
import type { z, ZodObject, ZodRawShape } from 'zod';
declare type ExampleValue<T> = T extends Date ? string : T;
export interface ZodOpenAPIMetadata<T = any, E = ExampleValue<T>> extends SchemaObject {
    param?: Partial<ParameterObject> & {
        example?: E;
    };
    example?: E;
    examples?: E[];
    default?: T;
}
export interface ZodOpenAPIInternalMetadata {
    refId?: string;
    extendedFrom?: {
        refId: string;
        schema: ZodObject<ZodRawShape>;
    };
}
export interface ZodOpenApiFullMetadata<T = any> {
    _internal?: ZodOpenAPIInternalMetadata;
    metadata?: ZodOpenAPIMetadata<T>;
}
declare module 'zod' {
    interface ZodTypeDef {
        openapi?: ZodOpenApiFullMetadata;
    }
    interface ZodSchema<Output, Def extends ZodTypeDef, Input = Output> {
        openapi<T extends ZodSchema<any>>(this: T, metadata: Partial<ZodOpenAPIMetadata<z.infer<T>>>): T;
        openapi<T extends ZodSchema<any>>(this: T, refId: string, metadata?: Partial<ZodOpenAPIMetadata<z.infer<T>>>): T;
    }
}
export declare function extendZodWithOpenApi(zod: typeof z): void;
export {};
