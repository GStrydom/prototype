import React, { Component } from 'react'
import SiteSlideshow from "./SiteSlideshow.js";
import ImageGrid from "./ImageGrid.js";
import VideoGrid from "./VideoGrid.js";


class Home extends Component {
	constructor(props) {
		super(props)

		this.state = {

		}
	}

	render() {
		return(
			<>
				<SiteSlideshow />
				<ImageGrid />
				<VideoGrid />
			</>
		)
	}
}

export default Home;
