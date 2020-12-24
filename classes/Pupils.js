"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UsersMap_js_1 = __importDefault(require("./UsersMap.js"));
const Pupil_js_1 = __importDefault(require("./Pupil.js"));
class Pupils extends UsersMap_js_1.default {
    constructor() {
        super();
    }
    add(data) {
        const pupil = new Pupil_js_1.default(data);
        super.add(pupil);
        return pupil;
    }
}
exports.default = Pupils;
