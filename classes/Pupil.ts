import User from "./User.js";
import { pupilData } from "./verify.js";


const rules  = {
	name: {
		type: "object",
		required: true,
		children: {
			first: {
				type: "string",
				required: true,
			},
			last: {
				type: "string",
				required: true,
			},
		},
	},
	image: {
		type: "string",
		required: true,
	},
	dateOfBirth: {
		type: "string",
		required: true,
		customValidator: function (val: string) {
			const regex = new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/);
			return {
				passed: regex.test(val),
				error: "dateOfBirth must be date format",
			};
		},
	}, // format date
	phones: {
		type: "array",
		required: true,
		children: {
			phone: {
				type: "string",
				required: true,
			},
			primary: {
				type: "boolean",
				required: true,
			},
		},
	},
	sex: {
		type: "string",
		required: true,
		customValidator: function (val:string) {
			return {
				passed: val === "male" || val === "female",
				error: "sex must be either male or female",
			};
		},
	}, // male or female
	description: {
		type: "string",
	},
};

class Pupil extends User {
	constructor(data :pupilData ) {
		super(rules, data);
	}
}

export default Pupil;
