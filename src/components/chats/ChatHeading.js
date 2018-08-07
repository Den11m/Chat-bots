import React from 'react';

export default function({name, photo, numberOfUsers}) {
	
	return (
		<div className="chat-header">
			<div className="user-info">
				<img src={photo} alt="avatar"/>
				<div className="user-name">{name}</div>
				<div className="status">
					<div className="indicator"></div>
					<span>{numberOfUsers ? numberOfUsers : null}</span>
				</div>
			</div>
		</div>
	);
	
}
