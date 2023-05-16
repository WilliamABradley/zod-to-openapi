"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAPI = exports.OpenAPIRegistry = exports.OpenAPIGenerator = exports.extendZodWithOpenApi = void 0;
var zod_extensions_1 = require("./zod-extensions");
Object.defineProperty(exports, "extendZodWithOpenApi", { enumerable: true, get: function () { return zod_extensions_1.extendZodWithOpenApi; } });
__exportStar(require("./openapi-metadata"), exports);
var openapi_generator_1 = require("./openapi-generator");
Object.defineProperty(exports, "OpenAPIGenerator", { enumerable: true, get: function () { return openapi_generator_1.OpenAPIGenerator; } });
var openapi_registry_1 = require("./openapi-registry");
Object.defineProperty(exports, "OpenAPIRegistry", { enumerable: true, get: function () { return openapi_registry_1.OpenAPIRegistry; } });
exports.OpenAPI = __importStar(require("openapi3-ts/oas30"));