import React, { Component } from 'react'
import Grid from 'semantic-ui-react'


class Profile extends Compoenent {
	constructor(props) {
		super(props)

		this.state = {
			
		}	
	}

	render() {
		return(
			<>
			<Grid>
				<Grid.Row>
					<Grid.Column>
						Image
					</Grid.Column>
					<Grid.Column>
						Info
					</Grid.Column>
					<Grid.Column>
						Subscriptions
					</Grid.Column>
				</Grid.Row>
			</Grid>
			</>
		)
	}
}

export default Profile;
