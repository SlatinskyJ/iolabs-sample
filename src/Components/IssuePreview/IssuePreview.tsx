import React, {ReactElement} from 'react';
import moment from 'moment';
import {Chip} from "@mui/material";

import {IssueType} from "../utils/types";
import Avatar from "../Avatar/Avatar";

import './IssuePreview.scss';

interface IssueProps {
	issue: IssueType;
}

const IssuePreview = ({issue}: IssueProps): ReactElement => {
	const createdDate = moment(issue.createdDate);

	return <div id="issue-preview">
		<span className="title">{issue.title}</span>
		<Chip className="status" label={issue.status}/>
		<img src={issue.previewUrl} className="preview" alt="Preview image"/>
		<div className="data">
			<p>{issue.location}</p>
			<p>{issue.version}</p>
			<p>{createdDate.format('MMM D, YYYY')}</p>
		</div>
		{issue.assignee &&
			<div className="user">
				<Avatar className="user-avatar" user={issue.assignee}/>
			</div>
		}
	</div>;
};

export default IssuePreview;