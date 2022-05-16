import React, {MouseEvent, useState} from "react";
import {Avatar, IconButton, Menu, MenuItem, Typography} from "@mui/material";
import {Menu as MenuIcon, Close as CloseIcon} from "@mui/icons-material";
import {Link} from "react-router-dom";
import classnames from "classnames";
import "./AppHeader.scss";

const AppHeader = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open: boolean = Boolean(anchorEl);
	const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = (): void => {
		setAnchorEl(null);
	};

	return (
		<header className="App-header">
			<div className="name">
				<Typography variant="h4">CTB</Typography>
			</div>
			<Avatar className="user-info">T</Avatar>
			<IconButton
				id="icon-button"
				className={classnames("more-actions-button", {"more-actions-button_open": open})}
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
				size="large"
			>
				{open ? <CloseIcon fontSize="inherit"/> : <MenuIcon font-size="inherit"/>}
			</IconButton>
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{"aria-labelledby": "basic-button", "className": "App-header--more-actions-menu-list"}}
				className="more-actions-menu"
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
			>
				<MenuItem onClick={handleClose}>
					<Link to="/" className="link">Issues</Link>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Link to="/About" className="link">About</Link>
				</MenuItem>
			</Menu>
		</header>
	);
};

export default AppHeader;
