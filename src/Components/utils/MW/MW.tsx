import React, {Component, createContext, ReactNode} from 'react';
import {find, isUndefined, map} from 'lodash';

import {IssueType, UserType} from '../types';

import currentUser from './currentUser.json';
import issues from './issues.json';
import randomUser from './myUsers.json';

// @ts-ignore
export const MWContext = createContext<MWProviderValue>();
const MWProvider = MWContext.Provider;

interface MWProps {
	children: ReactNode;
}

export interface MWProviderValue {
	getIssues: () => IssueType[];
	getIssue: (guid: string) => IssueType;
	getCurrentUser: () => UserType;
	updateIssue: (newValue: IssueType) => void;
	getRandomUser: () => UserType;
	getUser: (id: string) => UserType;
}

interface MWState {
	currentUser: UserType;
	issues: IssueType[];
	randomUsers: UserType[];
}

class MW extends Component<MWProps, MWState> {
	state = {
		currentUser: currentUser,
		issues: issues,
		randomUsers: randomUser,
	};

	getIssues = (): IssueType[] => this.state.issues;
	getIssue = (guid: string): IssueType => {
		const issue = find(this.state.issues, {issueGuid: guid});
		if (isUndefined(issue)) {
			throw new Error(`Issue with ${guid} was not found!`);
		}
		return issue;
	};
	getCurrentUser = (): UserType => this.state.currentUser;
	updateIssue = (newValue: IssueType): void => {
		this.setState((state) => {
			return {
				issues: map(state.issues, (issue) => {
					if (issue.issueGuid === newValue.issueGuid) {
						return newValue;
					} else {
						return issue;
					}
				})
			};
		});
	};
	getRandomUser = (): UserType => {
		const rndNumber = Math.floor(Math.random() * (this.state.randomUsers.length - 1));
		return this.state.randomUsers[rndNumber];
	};
	getUser = (id: string): UserType => {
		const user = find(this.state.randomUsers, ['id', id]);
		if (isUndefined(user)) {
			throw new Error(`User with id: ${id}, was not found`);
		}
		return user;
	};

	render() {
		const {children} = this.props;
		return <MWProvider
			value={{
				getIssues: this.getIssues,
				getIssue: this.getIssue,
				getCurrentUser: this.getCurrentUser,
				updateIssue: this.updateIssue,
				getRandomUser: this.getRandomUser,
				getUser: this.getUser
			}}>
			{children}
		</MWProvider>;
	}
}

export default MW;