interface id2{
	
	pupilId?:symbol

}
class Gradebook <T,O extends id2> {
	records: Map<symbol, O >;
	level: T;
	groupId: symbol;
	id: symbol;
	constructor(level:T , groupId:symbol) {
		this.records = new Map();
		this.level = level;
		this.groupId = groupId;
		this.id = Symbol();
	}

	addRecord(record:O) {
		const uniqueId = Symbol("id");
		this.records.set(uniqueId, record);
		return uniqueId;
	}

	readRecordsOfPupil(pupilId: symbol) {
		return Array.from(this.records.values()).filter((record) => record.pupilId === pupilId);
	}
}

export default Gradebook;
