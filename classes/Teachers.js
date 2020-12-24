"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UsersMap_js_1 = __importDefault(require("./UsersMap.js"));
const Teacher_js_1 = __importDefault(require("./Teacher.js"));
class Teachers extends UsersMap_js_1.default {
    constructor() {
        super();
    }
    add(data) {
        const teacher = new Teacher_js_1.default(data);
        return super.add(teacher);
    }
}
exports.default = Teachers;
