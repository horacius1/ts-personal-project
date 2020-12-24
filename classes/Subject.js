"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_js_1 = __importDefault(require("./User.js"));
const rules = {
    title: {
        type: "string",
    },
    lessons: {
        type: "number",
    },
    description: {
        type: "string",
    },
};
class Subject extends User_js_1.default {
    constructor(data) {
        super(rules, data);
    }
}
exports.default = Subject;
