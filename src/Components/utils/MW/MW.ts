import currentUser from './currentUser.json';
import issues from './issues.json';
import {IssueType, UserType} from "../types";

class MW {
	currentUser = currentUser as UserType;
	issues = issues as IssueType[];

	public getCurrentUser = (): UserType => currentUser;
	public getIssues = (): IssueType[] => issues;
}

export default MW;