"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ENV = process.env.NODE_ENV;
exports.default = (function (_a) {
    var development = _a.development, production = _a.production, test = _a.test;
    if (ENV === 'development') {
        if (development === undefined) {
            return null;
        }
        if (typeof development === 'function') {
            return development();
        }
        return development;
    }
    if (ENV === 'test') {
        if (test === undefined) {
            return null;
        }
        if (typeof test === 'function') {
            return test();
        }
        return test;
    }
    if (ENV === 'production') {
        if (production === undefined) {
            return null;
        }
        if (typeof production === 'function') {
            return production();
        }
        return production;
    }
    throw new Error("The env variable must be one of production, development, and test.");
});
