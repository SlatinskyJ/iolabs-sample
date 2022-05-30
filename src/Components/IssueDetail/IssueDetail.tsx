import React, {ReactElement, SyntheticEvent, useContext, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Tab, Tabs, Typography} from '@mui/material';
import {ArrowBackIosNew as ArrowBackIcon} from '@mui/icons-material';

import {MWContext, MWProviderValue} from '../utils/MW/MW';
import IssuePreview from '../IssuePreview/IssuePreview';

import './IssueDetail.scss';

const IssueDetail = (): ReactElement => {
	const {id = ''} = useParams();
	const navigate = useNavigate();
	const mw: MWProviderValue | null = useContext(MWContext);
	const [currentTab, setCurrentTab] = useState<number>(0);

	const handleTabChange = (event: SyntheticEvent, newValue: number) => {
		setCurrentTab(newValue);
	};

	const issue = mw?.getIssue(id);

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
				//icon={<p>TEST</p>} iconPosition="end"
				label="Comments"/>
		</Tabs>
		{
			currentTab === 0 && <div className="description-container">{issue?.description}</div>
		}
		{
			currentTab === 1 && <div>Comments</div>
		}

	</div>;
};

export default IssueDetail;