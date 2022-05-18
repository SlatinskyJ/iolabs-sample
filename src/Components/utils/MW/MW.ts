import {IssueType, UserType} from "../types";
import currentUser from './currentUser.json';
import issues from './issues.json';
import {find} from "lodash";

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

	public getIssue(guid: string): IssueType | undefined {
		return find(this.issues, {issueGuid: guid});
	}

	public getCurrentUser(): UserType {
		return this.currentUser;
	}
}

export default MW;