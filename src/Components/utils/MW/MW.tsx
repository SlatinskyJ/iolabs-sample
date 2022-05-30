import React, {Component, createContext, ReactNode} from 'react';
import {find} from 'lodash';

import {IssueType, UserType} from '../types';

import currentUser from './currentUser.json';
import issues from './issues.json';

export const MWContext = createContext<MWProviderValue | null>(null);
const MWProvider = MWContext.Provider;

interface MWProps {
	children: ReactNode;
}

export interface MWProviderValue {
	getIssues: () => IssueType[];
	getIssue: (guid: string) => IssueType | undefined;
	getCurrentUser: () => UserType;
}

class MW extends Component<MWProps> {
	state = {
		currentUser: currentUser,
		issues: issues,
	};

	getIssues = (): IssueType[] => this.state.issues;
	getIssue = (guid: string): IssueType | undefined => find(this.state.issues, {issueGuid: guid});
	getCurrentUser = (): UserType => this.state.currentUser;

	render() {
		const {getIssues, getIssue, getCurrentUser} = this;
		const {children} = this.props;
		return <MWProvider
			value={{
				getIssues,
				getIssue,
				getCurrentUser
			}}>
			{children}
		</MWProvider>;
	}
}

export default MW;