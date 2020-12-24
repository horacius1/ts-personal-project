import UsersMap from "./UsersMap.js";
import Teacher from "./Teacher.js";
import { teacherData, teacherDataUpdate } from "./verify.js";

class Teachers extends UsersMap {
	constructor() {
		super();
	}

	add(data:teacherData) {
		const teacher = new Teacher(data);
		return super.add(teacher);
	}
}

export default Teachers;
