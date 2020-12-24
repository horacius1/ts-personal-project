import User from "./User.js";
type subject={
    title: string,
    lessons: number,
    description: string
  }

const rules = {
	title: {
		type: "string",
	},
	lessons: {
		type: "number",
	},
	description: {
		type: "string",
	},
};

class Subject extends User {
	constructor(data :subject) {
		super(rules, data);
	}
}

export default Subject;
