"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Group_js_1 = __importDefault(require("./Group.js"));
const UsersMap_js_1 = __importDefault(require("./UsersMap.js"));
class Groups extends UsersMap_js_1.default {
    constructor() {
        super();
    }
    add(room) {
        const group = new Group_js_1.default(room);
        return super.add(group);
    }
    addPupil(groupId, pupil) {
        const group = this.database.get(groupId);
        const newPupil = group.addPupil(pupil);
        this.database.set(groupId, group);
        return newPupil;
    }
    removePupil(groupId, pupil) {
        const group = this.database.get(groupId);
        group.removePupil(pupil);
        this.database.set(groupId, group);
    }
}
exports.default = Groups;
