import UsersMap from "./UsersMap.js";
import Pupil from "./Pupil.js";
import Gradebook from "./Gradebook.js";
import Group from "./Group.js";
import Teacher from "./Teacher.js";
import { pupilData } from "./verify.js";

class Pupils extends UsersMap {
	constructor() {
		super();
	}

	add(data:pupilData) {
		const pupil = new Pupil(data);
		super.add(pupil);
		return pupil;
	}
}

export default Pupils;
