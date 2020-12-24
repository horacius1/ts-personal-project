import UsersMap from "./UsersMap.js";
interface id {
id:symbol
	
}
class LMS extends UsersMap  {
	database :any
	constructor() {
		super();
	}

	readAll() {
		const database  = Array.from(this.database.entries()).map((keyVal:object) => {
			return {
				...keyVal[1],
				id: keyVal[0],
			};
		});
		return database;
	}

	verify<T extends id,U>({ id }:T):U {
		return this.database.has(id);
	}


	remove<T extends id>(subject:T) {
		return super.remove(subject.id);
	}
}

export default LMS;
