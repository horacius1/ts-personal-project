"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UsersMap_js_1 = __importDefault(require("./UsersMap.js"));
class LMS extends UsersMap_js_1.default {
    constructor() {
        super();
    }
    readAll() {
        const database = Array.from(this.database.entries()).map((keyVal) => {
            return Object.assign(Object.assign({}, keyVal[1]), { id: keyVal[0] });
        });
        return database;
    }
    verify({ id }) {
        return this.database.has(id);
    }
    remove(subject) {
        return super.remove(subject.id);
    }
}
exports.default = LMS;
