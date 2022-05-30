import React, {MouseEvent, ReactElement, useContext, useState} from 'react';
import {IconButton, Menu, MenuItem, Typography} from '@mui/material';
import {Close as CloseIcon, Menu as MenuIcon} from '@mui/icons-material';
import {Link} from 'react-router-dom';
import classnames from 'classnames';

import {MWContext, MWProviderValue} from '../utils/MW/MW';
import Avatar from '../Avatar/Avatar';

import './AppHeader.scss';

const AppHeader = (): ReactElement | null => {
	const mw: MWProviderValue | null = useContext(MWContext);

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open: boolean = Boolean(anchorEl);
	const user = mw?.getCurrentUser();

	const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = (): void => {
		setAnchorEl(null);
	};

	if (!user) {
		return null;
	}

	return (
		<header className="App-header">
			<div className="name">
				<Typography variant="h4">CTB</Typography>
			</div>
			<Avatar user={user}/>
			<IconButton
				id="icon-button"
				className={classnames('more-actions-button', {'more-actions-button_open': open})}
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
				size="large"
			>
				{open ? <CloseIcon fontSize="inherit"/> : <MenuIcon fontSize="inherit"/>}
			</IconButton>
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{'aria-labelledby': 'basic-button', 'className': 'App-header--more-actions-menu-list'}}
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
