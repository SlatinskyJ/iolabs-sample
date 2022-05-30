import React, {ReactElement} from 'react';
import moment from 'moment';
import {Chip} from '@mui/material';

import {IssueType} from '../utils/types';
import {DATE_FORMAT} from '../utils/constants';
import Avatar from '../Avatar/Avatar';

import './IssuePreview.scss';
import {isArray} from 'lodash';

interface IssueProps {
	issue: IssueType;
	withDetails?: boolean;
}

const IssuePreview = ({issue, withDetails = false}: IssueProps): ReactElement => {
	const createdDate = moment(issue.createdDate);

	return <div id="issue-preview">
		<span className="title">{issue.title}</span>
		{withDetails && <Chip className="status" label={issue.status}/>}
		<img src={issue.previewUrl} className="preview" alt="Preview image"/>
		<div className="data">
			<p className="data-location">{issue.location}</p>
			<p className="data-version">{issue.version}</p>
			<p className="data-timestamp">{createdDate.format(DATE_FORMAT)}</p>
		</div>
		{withDetails && isArray(issue.comments) &&
			<div className="comments">
				<Chip label={issue.comments.length}/>
			</div>}
		{withDetails && issue.assignee &&
			<div className="user">
				<Avatar className="user-avatar" user={issue.assignee}/>
			</div>
		}
	</div>;
};

export default IssuePreview;