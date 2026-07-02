import type { Task } from "./Task.js";

export interface Project {
	id: string
	projectName: string;
	detail: string;
	phase: string;
	area: string;
	suggested: string;
	week: string;
	startTime: Date;
	endTime: Date;
	topic: string;
	tasks: Task[];
}

