import React, {createContext} from "react";
import {createTheme, ThemeProvider} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import AppHeader from "./Components/AppHeader/AppHeader";
import MW from './Components/utils/MW/MW';
import Home from "./Components/Home/Home";
import IssueDetail from "./Components/IssueDetail/IssueDetail";

import "./App.scss";

const theme = createTheme({});
const mw = new MW();
export const MWContext = createContext(mw);

function App() {

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<MWContext.Provider value={mw}>
					<AppHeader/>
					<div className="App-body">
						<Routes>
							<Route path="/" element={<Home/>}/>
							<Route path="/issue/:id" element={<IssueDetail/>}/>
							<Route path="/About" element={<p>About</p>}/>
						</Routes>
					</div>
				</MWContext.Provider>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
