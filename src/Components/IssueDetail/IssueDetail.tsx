import React, {ReactElement, SyntheticEvent, useContext, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import moment from 'moment';
import {cloneDeep} from 'lodash';
import {Chip, Tab, Tabs, Typography} from '@mui/material';
import {ArrowBackIosNew as ArrowBackIcon} from '@mui/icons-material';

import {MWContext, MWProviderValue} from '../utils/MW/MW';
import IssuePreview from '../IssuePreview/IssuePreview';
import Comments from '../Comments/Comments';

import './IssueDetail.scss';

const IssueDetail = (): ReactElement => {
	const {id = ''} = useParams();
	const navigate = useNavigate();
	const mw = useContext<MWProviderValue>(MWContext);
	const [currentTab, setCurrentTab] = useState<number>(0);
	const issue = mw.getIssue(id);

	const handleTabChange = (event: SyntheticEvent, newValue: number) => {
		setCurrentTab(newValue);
	};

	const addComment = (comment: string) => {
		const commentObj = {body: comment, authorId: mw.getRandomUser().id, createdAt: moment.now()};
		const newIssue = cloneDeep(issue);
		newIssue.comments = [...newIssue.comments || [], commentObj];
		mw.updateIssue(newIssue);
	};

	return <div id="IssueDetail">
		<div className="header">
			<ArrowBackIcon fontSize="medium" className="back-icon" onClick={() => {
				navigate('/');
			}}/>
			<Typography variant="h5">Issues</Typography>
		</div>
		{
			issue &&
			<IssuePreview issue={issue}/>
		}
		<Tabs value={currentTab} onChange={handleTabChange} variant="fullWidth">
			<Tab label="Details"/>
			<Tab
				icon={<Chip label={issue.comments?.length || 0}/>} iconPosition="end"
				label="Comments"/>
		</Tabs>
		{
			currentTab === 0 && <div className="description-container">{issue?.description}</div>
		}
		{
			currentTab === 1 && <Comments comments={issue?.comments || []} addComment={addComment}/>
		}

	</div>;
};

export default IssueDetail;