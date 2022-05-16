import {IssueType, UserType} from "../types";
import currentUser from './currentUser.json';
import issues from './issues.json';

class MW {
	private readonly currentUser: UserType;
	private readonly issues: IssueType[];

	constructor() {
		this.currentUser = currentUser as UserType;
		this.issues = issues as IssueType[];
	}

	public getIssues(): IssueType[] {
		return this.issues;
	};

	public getCurrentUser(): UserType {
		return this.currentUser;
	}
}

export default MW;