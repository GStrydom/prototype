import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'


class ImageGrid extends Component {
	constructor(props) {
		super(props)

		this.state = {

		}
	}

	render() {
		return(
			<>
				<Grid relaxed columns={4}>
					<Grid.Row>
						<Grid.Column>
	      					<Image src='/images/wireframe/image.png' />
	    				</Grid.Column>
					    <Grid.Column>
					      	<Image src='/images/wireframe/image.png' />
					    </Grid.Column>
					    <Grid.Column>
					      	<Image src='/images/wireframe/image.png' />
					    </Grid.Column>
					    <Grid.Column>
					      	<Image src='/images/wireframe/image.png' />
					    </Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column>
	      					<Image src='/images/wireframe/image.png' />
	    				</Grid.Column>
					    <Grid.Column>
					      	<Image src='/images/wireframe/image.png' />
					    </Grid.Column>
					    <Grid.Column>
					      	<Image src='/images/wireframe/image.png' />
					    </Grid.Column>
					    <Grid.Column>
					      	<Image src='/images/wireframe/image.png' />
					    </Grid.Column>
					</Grid.Row>
  				</Grid>
			</>
		)
	}
}

export default ImageGrid
