import Group from "./Group.js";
import UsersMap from "./UsersMap.js";

class Groups extends UsersMap {
	constructor() {
		super();
	}

	add(room:number) {
		const group = new Group(room);
		return super.add(group);
	}

	addPupil(groupId:symbol, pupil:string) {
		const group = this.database.get(groupId);
		const newPupil = group.addPupil(pupil);
		this.database.set(groupId, group);
		return newPupil;
	}

	removePupil(groupId:symbol, pupil:string) {
		const group = this.database.get(groupId);
		group.removePupil(pupil);
		this.database.set(groupId, group);
	}
}

export default Groups;
