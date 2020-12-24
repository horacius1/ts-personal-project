"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_js_1 = __importDefault(require("./User.js"));
const rules = {
    name: {
        type: "object",
        required: true,
        children: {
            first: {
                type: "string",
                required: true,
            },
            last: {
                type: "string",
                required: true,
            },
        },
    },
    image: {
        type: "string",
        required: true,
    },
    dateOfBirth: {
        type: "string",
        required: true,
        customValidator: function (val) {
            const regex = new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/);
            return {
                passed: regex.test(val),
                error: "dateOfBirth must be date format",
            };
        },
    },
    phones: {
        type: "array",
        required: true,
        children: {
            phone: {
                type: "string",
                required: true,
            },
            primary: {
                type: "boolean",
                required: true,
            },
        },
    },
    sex: {
        type: "string",
        required: true,
        customValidator: function (val) {
            return {
                passed: val === "male" || val === "female",
                error: "sex must be either male or female",
            };
        },
    },
    description: {
        type: "string",
    },
};
class Pupil extends User_js_1.default {
    constructor(data) {
        super(rules, data);
    }
}
exports.default = Pupil;
