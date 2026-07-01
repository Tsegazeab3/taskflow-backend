import type User from "./Users"
interface Task {
	id: string;
	taskName: string;
	taskDetails: string;
	assigned_people: User[];
	startTime: Date;
	endTime: Date;
}
export default Task
