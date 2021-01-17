import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { NavLink, BrowserRouter } from 'react-router-dom'


class Navbar extends Component {
	constructor(props) {
		super(props)
		
		this.state = {
			activeItem: 'home'
		}
	}
	
	handleItemClick = (e, { name }) => {
		this.setState({ activeItem: name })
	}
	
	render() {
		const { activeItem } = this.state

		return (
			<BrowserRouter>
				<Menu secondary>
					<Menu.Item
						as={NavLink} to="/"
						name='home'
						active={activeItem === 'home'}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						as={NavLink} to="/services"
						name='services'
						active={activeItem === 'services'}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						as={NavLink} to="/contact"
						name='contact'
						active={activeItem === 'contact'}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						as={NavLink} to="/profile"
						name='profile'
						active={activeItem === 'profile'}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						as={NavLink} to="/login"
						name='login'
						active={activeItem === 'login'}
						onClick={this.handleItemClick}
					/>
				</Menu>
			</BrowserRouter>
		)
	}
}

export default Navbar;