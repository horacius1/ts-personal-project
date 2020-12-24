"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(rules, data) {
        this.rules = rules;
        this.data = data;
        this.id = Symbol("id");
    }
    verifyAndSetData(data) {
        for (let rule of Object.entries(this.rules)) {
            if (!!data[rule[0]]) {
                this[rule[0]] = data[rule[0]];
            }
        }
    }
    update(updatedValues) {
        this.verifyAndSetData(updatedValues);
    }
}
exports.default = User;
