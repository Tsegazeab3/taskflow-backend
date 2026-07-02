export interface User {
	id: string;
	email: string;
	firstName: string;
	lastName?: string;
	password: string;
	age?: number;
	phoneNumber: string;
	createdAt: Date;
	updatedAt: Date;
	isActive: boolean;
}
