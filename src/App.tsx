import React from "react";
import {createTheme, ThemeProvider} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppHeader from "./Components/AppHeader/AppHeader";
import "./App.scss";

const theme = createTheme({});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<div className="App">
					<AppHeader/>
					<body className="App-body">
						<Routes>
							<Route path="/" element={<p>Home</p>}/>
							<Route path="/About" element={<p>About</p>}/>
						</Routes>
					</body>
				</div>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
