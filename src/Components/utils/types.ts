export interface UserType {
	id: string;
	userName: string;
	fullName: string;
}

export interface IssueType {
	issueGuid: string;
	status: string;
	createdDate: string;
	title: string;
	assignee: UserType | null;
	ownerId?: string;
	owner: UserType;
	location?: string;
	version: number;
	description: string;
	previewUrl: string;
}