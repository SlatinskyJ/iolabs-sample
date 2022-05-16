import React, {ChangeEvent, ReactElement, useContext, useEffect, useState} from 'react';
import {Pagination, Typography} from "@mui/material";
import {ceil, map, slice} from "lodash";

import {MWContext} from "../../App";
import IssuePreview from "../IssuePreview/IssuePreview";
import {IssueType} from "../utils/types";

import './Home.scss';

const Home = (): ReactElement => {
	const mw = useContext(MWContext);
	const issues: Array<IssueType> = mw.getIssues();
	const [page, setPage] = useState<number>(1);

	const maxPage: number = ceil(issues.length / 2);
	let currentIssues: Array<IssueType> = slice(issues, (page - 1) * 2, page * 2);

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
				map(currentIssues, (issue: IssueType) => <IssuePreview issue={issue} key={issue.issueGuid}/>)
			}
		</div>
		<div className="pagination-container">
			<Pagination className="pagination" count={maxPage} page={page} onChange={pageChange}/>
		</div>
	</div>;
};

export default Home;