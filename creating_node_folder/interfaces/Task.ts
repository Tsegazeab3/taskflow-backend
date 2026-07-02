import type { User } from "./Users.js"
export interface Task {
	id: string;
	taskName: string;
	taskDetails: string;
	assigned_people: User[];
	startTime: Date;
	endTime: Date;
}
