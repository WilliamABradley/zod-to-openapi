import { CallbackObject, ComponentsObject, EncodingObject, ExampleObject, ExamplesObject, HeaderObject, HeadersObject, ISpecificationExtension, LinkObject, LinksObject, OperationObject, ParameterObject, ReferenceObject, RequestBodyObject, ResponseObject, SchemaObject, SecuritySchemeObject } from 'openapi3-ts/oas30';
import type { AnyZodObject, ZodSchema, ZodType } from 'zod';
declare type Method = 'get' | 'post' | 'put' | 'delete' | 'patch' | 'head' | 'options' | 'trace';
export interface ZodMediaTypeObject {
    schema: ZodType<unknown> | SchemaObject | ReferenceObject;
    examples?: ExamplesObject;
    example?: any;
    encoding?: EncodingObject;
}
export interface ZodContentObject {
    [mediaType: string]: ZodMediaTypeObject;
}
export interface ZodRequestBody {
    description?: string;
    content: ZodContentObject;
    required?: boolean;
}
export interface ResponseConfig {
    description: string;
    headers?: AnyZodObject | HeadersObject;
    links?: LinksObject;
    content?: ZodContentObject;
}
export interface RouteConfig extends OperationObject {
    method: Method;
    path: string;
    request?: {
        body?: ZodRequestBody;
        params?: AnyZodObject;
        query?: AnyZodObject;
        headers?: AnyZodObject | ZodType<unknown>[];
    };
    responses: {
        [statusCode: string]: ResponseConfig;
    };
}
export declare type OpenAPIComponentObject = SchemaObject | ResponseObject | ParameterObject | ExampleObject | RequestBodyObject | HeaderObject | SecuritySchemeObject | LinkObject | CallbackObject | ISpecificationExtension;
export declare type ComponentTypeKey = Exclude<keyof ComponentsObject, number>;
export declare type ComponentTypeOf<K extends ComponentTypeKey> = NonNullable<ComponentsObject[K]>[string];
export declare type OpenAPIDefinitions = {
    type: 'component';
    componentType: ComponentTypeKey;
    name: string;
    component: OpenAPIComponentObject;
} | {
    type: 'schema';
    schema: ZodSchema<any>;
} | {
    type: 'parameter';
    schema: ZodSchema<any>;
} | {
    type: 'route';
    route: RouteConfig;
} | {
    type: 'webhook';
    webhook: RouteConfig;
};
export declare class OpenAPIRegistry {
    private parents?;
    private _definitions;
    constructor(parents?: OpenAPIRegistry[] | undefined);
    get definitions(): OpenAPIDefinitions[];
    /**
     * Registers a new component schema under /components/schemas/${name}
     */
    register<T extends ZodSchema<any>>(refId: string, zodSchema: T): T;
    /**
     * Registers a new parameter schema under /components/parameters/${name}
     */
    registerParameter<T extends ZodSchema<any>>(refId: string, zodSchema: T): T;
    /**
     * Registers a new path that would be generated under paths:
     */
    registerPath(route: RouteConfig): void;
    /**
     * Registers a new webhook that would be generated under webhooks:
     */
    registerWebhook(webhook: RouteConfig): void;
    /**
     * Registers a raw OpenAPI component. Use this if you have a simple object instead of a Zod schema.
     *
     * @param type The component type, e.g. `schemas`, `responses`, `securitySchemes`, etc.
     * @param name The name of the object, it is the key under the component
     *             type in the resulting OpenAPI document
     * @param component The actual object to put there
     */
    registerComponent<K extends ComponentTypeKey>(type: K, name: string, component: ComponentTypeOf<K>): {
        name: string;
        ref: {
            $ref: string;
        };
    };
    private schemaWithRefId;
}
export {};