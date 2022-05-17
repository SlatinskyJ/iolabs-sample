import React, {ReactElement} from "react";
import {Avatar as MuiAvatar} from "@mui/material";
import {join, toUpper} from "lodash";
import classnames from "classnames";

import {UserType} from "../utils/types";

interface AvatarProps {
	user: UserType;
	className?: string;
}

const Avatar = ({user, className}: AvatarProps): ReactElement => (
	<MuiAvatar className={classnames("user-info", className)}>
		{toUpper(join(user.fullName.match(/\b(\w)/g), ''))}
	</MuiAvatar>
);

export default Avatar;