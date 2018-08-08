import React from 'react';

export default function({name, photo}) {
	
	return (
		<div className="chat-header">
			<div className="user-info">
				<img src={photo} alt="avatar"/>
				<div className="user-name">{name}</div>
				<div className="status">
					<div className="indicator"></div>
				</div>
			</div>
		</div>
	);
	
}
