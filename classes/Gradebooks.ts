import UsersMap from "./UsersMap.js";
import Gradebook from "./Gradebook.js";
import Group from "./Group.js";
import Pupil from "./Pupil.js";
import Teacher from "./Teacher.js";

class Groups extends UsersMap {
	groups: any;
	teachers: any;
	lms: any;
	
	constructor(groups: object, teachers: object, lms: object) {
		super();
		this.groups = groups;
		this.teachers = teachers;
		this.lms = lms;
	}

	add(level:number, groupId: symbol) {
		const gradebook = new Gradebook(level, groupId);
		return super.add(gradebook);
	}

	addRecord(gradebookId: symbol, record: object) {
		const gradebook = this.database.get(gradebookId);
		gradebook.addRecord(record);
		this.database.set(gradebookId, gradebook);
	}

	removePupil(groupId: symbol, pupil: object) {
		const group = this.database.get(groupId);
		group.removePupil(pupil);
		this.database.set(groupId, group);
	}

	read(gradebookId:symbol, pupilId: symbol) {
		const gradebook = super.read(gradebookId);
		const group = this.groups.read(gradebook.groupId);
		const pupil = group.readPupil(pupilId);
		var allRecordsOfPupil = gradebook.readRecordsOfPupil(pupilId);
		allRecordsOfPupil = allRecordsOfPupil.map((record: { teacherId: symbol; subjectId: symbol; lesson: number; mark: number; }) => {
			let teacher = this.teachers.read(record.teacherId);
			return {
				teacher: `${teacher.name.first} ${teacher.name.last}`,
				subject: this.lms.read(record.subjectId).title,
				lesson: record.lesson,
				mark: record.mark,
			};
		});
		const result = {
			name: `${pupil.name.first} ${pupil.name.last}`,
			records: allRecordsOfPupil,
		};
		return result;
	}


}

export default Groups;
