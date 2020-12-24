import Pupils from "./Pupils.js";
import { pupilData } from "./verify.js";

class Group {
	pupils: Pupils;
	room: number;
	id: symbol;
	constructor(room: number) {
		this.pupils = new Pupils();
		this.room = room;
		this.id = Symbol("id");
	}

	addPupil(pupil: pupilData) {
		return this.pupils.add(pupil);
	}

	removePupil(id: number) {
		this.pupils.remove(id);
	}

	readPupil(id: symbol) {
		return this.pupils.read(id);
	}

	update({ room}) {
		this.room = room;
	}

	readAllPupils() {
		return this.pupils.readAll();
	}
}

export default Group;
