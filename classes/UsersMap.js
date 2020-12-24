"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsersMap {
    constructor() {
        this.database = new Map();
    }
    add(data, data2) {
        this.database.set(data.id, data);
        return data.id;
    }
    read(id, id2, arr) {
        if (this.database.has(id)) {
            return this.database.get(id);
        }
        else {
            return null;
        }
    }
    update(id, updatedValues) {
        if (this.database.has(id)) {
            const user = this.database.get(id);
            user.update(updatedValues);
            this.database.set(id, user);
            return id;
        }
    }
    remove(id) {
        const hasBeenDeleted = this.database.delete(id);
        if (hasBeenDeleted) {
            return true;
        }
        else {
            return false;
        }
    }
    readAll() {
        return Array.from(this.database.values());
    }
}
exports.default = UsersMap;
