import React from "react";
import "./App.scss";
import {createTheme, ThemeProvider} from "@mui/material";
import {BrowserRouter} from "react-router-dom";

const theme = createTheme({});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<div className="App">
					<header className="App-header">
						<p>Header</p>
					</header>
					<body className="App-body">
						<p>Just body text.</p>
					</body>
				</div>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
