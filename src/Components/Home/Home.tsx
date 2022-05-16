import React, {ReactElement, useContext} from 'react';

import {MWContext} from "../../App";
import IssuePreview from "../IssuePreview/IssuePreview";

import './Home.scss';

const Home = (): ReactElement => {
	const mw = useContext(MWContext);
	const issue = mw.getIssues()[0];

	return <div id="Home">
		<p>This is Home!</p>
		<IssuePreview issue={issue}/>
	</div>;
};

export default Home;