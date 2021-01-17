import React, { Component } from 'react';
import ReactPlayer from 'react-player';


class LiveView extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return(
			<ReactPlayer />
		)
	}
}

export default LiveView;
