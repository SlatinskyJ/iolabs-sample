import React, {createContext} from "react";
import {createTheme, ThemeProvider} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppHeader from "./Components/AppHeader/AppHeader";
import MW from './Components/utils/MW/MW';
import "./App.scss";

const theme = createTheme({});
const MWContext = createContext(MW);

function App() {

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<MWContext.Provider value={MW}>
					<div className="App">
						<AppHeader/>
						<body className="App-body">
							<Routes>
								<Route path="/" element={<p>Home</p>}/>
								<Route path="/About" element={<p>About</p>}/>
							</Routes>
						</body>
					</div>
				</MWContext.Provider>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
