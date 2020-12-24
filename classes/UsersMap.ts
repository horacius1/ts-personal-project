import { pupilDataUpdate, teacherDataUpdate } from "./verify";



class UsersMap {
	database: Map<any, any>;
	constructor() {
		this.database = new Map();
	}

	add(data:any,data2?:any ) {
		this.database.set(data.id, data);
		return data.id;
	}

	read(id:symbol,id2?:symbol,arr?:Array<string>[] ) {
		if (this.database.has(id)) {
			return this.database.get(id);
		} else {
			return null;
		}
	}

	update(id, updatedValues :teacherDataUpdate|pupilDataUpdate) {
		if (this.database.has(id)) {
			const user = this.database.get(id);
			user.update(updatedValues);
			this.database.set(id, user);
			return id;
		}
	}

	remove(id:any) {
		const hasBeenDeleted = this.database.delete(id);
		if (hasBeenDeleted) {
			return true;
		} else {
			return false;
		}
	}

	readAll() {
		return Array.from(this.database.values());
	}
}

export default UsersMap;
