"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pupils_js_1 = __importDefault(require("./Pupils.js"));
class Group {
    constructor(room) {
        this.pupils = new Pupils_js_1.default();
        this.room = room;
        this.id = Symbol("id");
    }
    addPupil(pupil) {
        return this.pupils.add(pupil);
    }
    removePupil(id) {
        this.pupils.remove(id);
    }
    readPupil(id) {
        return this.pupils.read(id);
    }
    update({ room }) {
        this.room = room;
    }
    readAllPupils() {
        return this.pupils.readAll();
    }
}
exports.default = Group;
