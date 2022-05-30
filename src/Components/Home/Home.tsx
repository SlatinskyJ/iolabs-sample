import React, {ChangeEvent, ReactElement, useContext, useEffect, useState} from 'react';
import {Pagination, Typography} from '@mui/material';
import {ceil, map, slice} from 'lodash';

import IssuePreview from '../IssuePreview/IssuePreview';
import {IssueType} from '../utils/types';
import {MWContext, MWProviderValue} from '../utils/MW/MW';

import './Home.scss';
import {useNavigate} from 'react-router-dom';

const Home = (): ReactElement => {
	const mw: MWProviderValue | null = useContext(MWContext);
	const issues: IssueType[] = mw?.getIssues() || [];
	const [page, setPage] = useState<number>(1);
	const navigate = useNavigate();

	const maxPage: number = ceil(issues.length / 2);
	let currentIssues: IssueType[] = slice(issues, (page - 1) * 2, page * 2);

	const pageChange = (event: ChangeEvent<unknown>, value: number): void => {
		setPage(value);
	};

	useEffect(() => {
		currentIssues = slice(issues, (page - 1) * 2, page * 2);
	}, [page]);

	return <div id="Home">
		<Typography variant="h5" className="header">Issues</Typography>
		<div className="issues-list">
			{
				map(currentIssues, (issue: IssueType) =>
					<div
						key={issue.issueGuid}
						className="issue-preview-container"
						onClick={(): void => {
							navigate(`/issue/${issue.issueGuid}`);
						}}
					>
						<IssuePreview issue={issue} withDetails/>
					</div>)
			}
		</div>
		<div className="pagination-container">
			<Pagination className="pagination" count={maxPage} page={page} onChange={pageChange}/>
		</div>
	</div>;
};

export default Home;