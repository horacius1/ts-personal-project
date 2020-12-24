import { pupilDataUpdate, teacherDataUpdate } from "./verify";


class User {
	rules: object;
	data: object;
	id: symbol;

	constructor(rules:object, data:object) {
		this.rules = rules;
		this.data=data;
		this.id = Symbol("id");
	}

	verifyAndSetData(data:object) {
		
		for (let rule of Object.entries(this.rules)) {
			if (!!data[rule[0]]) {
				this[rule[0]] = data[rule[0]];
			}
		}
	}

	update(updatedValues:pupilDataUpdate|teacherDataUpdate) {
		this.verifyAndSetData(updatedValues);
	}
}

export default User;
