import type { OpenAPIObject } from 'openapi3-ts/oas30';
import type { ZodSchema } from 'zod';
import { OpenAPIDefinitions } from './openapi-registry';
declare const openApiVersions: readonly ["3.0.0", "3.0.1", "3.0.2", "3.0.3", "3.1.0"];
export declare type OpenApiVersion = typeof openApiVersions[number];
export declare type OpenAPIObjectConfig = Omit<OpenAPIObject, 'paths' | 'components' | 'webhooks' | 'openapi'>;
export declare class OpenAPIGenerator {
    private definitions;
    private openAPIVersion;
    private schemaRefs;
    private paramRefs;
    private pathRefs;
    private webhookRefs;
    private rawComponents;
    constructor(definitions: (OpenAPIDefinitions | ZodSchema)[], openAPIVersion: OpenApiVersion);
    generateDocument(config: OpenAPIObjectConfig): OpenAPIObject;
    generateComponents(): Pick<OpenAPIObject, 'components'>;
    private buildComponents;
    private sortDefinitions;
    private generateSingle;
    private generateParameterDefinition;
    private getParameterRef;
    private generateInlineParameters;
    private generateSimpleParameter;
    private generateParameter;
    private generateSchemaWithMetadata;
    /**
     * Generates an OpenAPI SchemaObject or a ReferenceObject with all the provided metadata applied
     */
    private generateSimpleSchema;
    /**
     * Generates a whole OpenApi schema and saves it into
     * schemaRefs if a `refId` is provided.
     */
    private generateSchema;
    /**
     * Same as `generateSchema` but if the new schema is added into the
     * referenced schemas, it would return a ReferenceObject and not the
     * whole result.
     *
     * Should be used for nested objects, arrays, etc.
     */
    private generateSchemaWithRef;
    private generateSchemaRef;
    private getRequestBody;
    private getParameters;
    private generatePath;
    private generateSingleRoute;
    private generateSingleWebhook;
    private getResponse;
    private getResponseHeaders;
    private getBodyContent;
    private getZodStringCheck;
    /**
     * Attempts to map Zod strings to known formats
     * https://json-schema.org/understanding-json-schema/reference/string.html#built-in-formats
     */
    private mapStringFormat;
    private mapDiscriminator;
    private openApiVersionSatisfies;
    private mapNullableOfArray;
    private mapNullableType;
    private getNumberChecks;
    private constructReferencedOpenAPISchema;
    private toOpenAPISchema;
    private isOptionalSchema;
    private getDefaultValue;
    private requiredKeysOf;
    private toOpenAPIObjectSchema;
    private flattenUnionTypes;
    private flattenIntersectionTypes;
    private unwrapChained;
    /**
     * A method that omits all custom keys added to the regular OpenAPI
     * metadata properties
     */
    private buildSchemaMetadata;
    private buildParameterMetadata;
    private getMetadata;
    private getInternalMetadata;
    private getRefId;
    private applySchemaMetadata;
    private enhanceMissingParametersError;
}
export {};
