import React, {ChangeEvent, ReactElement, useContext, useState} from 'react';
import {isEmpty, map, sortBy} from 'lodash';
import moment from 'moment';
import {Button, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography} from '@mui/material';

import {CommentType} from '../utils/types';
import {MWContext, MWProviderValue} from '../utils/MW/MW';
import Avatar from '../Avatar/Avatar';

import './Comments.scss';

interface CommentProps {
	comment: CommentType;
}

const Comment = ({comment}: CommentProps): ReactElement => {
	const mw = useContext<MWProviderValue>(MWContext);
	const user = mw.getUser(comment.authorId);
	return <ListItem alignItems="flex-start" className="comment">
		<ListItemAvatar>
			<Avatar user={user}/>
		</ListItemAvatar>
		<ListItemText
			primary={user.fullName}
			secondary={<>
				<Typography
					component="span"
					className="message-body">
					{comment.body}
				</Typography>
				<div className="message-timestamp-container">
					<Typography
						component="span"
						className="message-timestamp">
						{moment(comment.createdAt).fromNow()}
					</Typography>
				</div>
			</>}
		/>
	</ListItem>;
};


interface CommentsProps {
	comments: CommentType[];
	addComment: (comment: string) => void;
}

const Comments = ({comments, addComment}: CommentsProps): ReactElement => {
	const [inputValue, setInputValue] = useState<string>('');
	const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setInputValue(event.target.value);
	};

	return <div id="Comments">
		<List className="comments-container">
			{!isEmpty(comments) && map(sortBy(comments, ['createdAt']), (comment, index) =>
				<Comment key={index} comment={comment}/>
			)}
		</List>
		<TextField value={inputValue} onChange={handleInputChange}/>
		<Button variant="contained" onClick={() => {
			addComment(inputValue);
		}}>Add Comment</Button>
	</div>;
};

export default Comments;