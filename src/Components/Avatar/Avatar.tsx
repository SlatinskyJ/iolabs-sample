import React, {ReactElement} from "react";
import {Avatar as MuiAvatar} from "@mui/material";
import {join, toUpper} from "lodash";

import {UserType} from "../utils/types";

interface AvatarProps {
	user: UserType;
}

const Avatar = ({user}: AvatarProps): ReactElement => (
	<MuiAvatar className="user-info">
		{toUpper(join(user.fullName.match(/\b(\w)/g), ''))}
	</MuiAvatar>
);

export default Avatar;