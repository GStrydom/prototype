import React, { Component } from 'react';


class Cart extends Component {
	constructor(props) {
		super(props)

		this.state = {
			newItemName: '',
			availableSubscriptions: [
				{ id: 'sub-0', name: 'Christina', price: 'R250.00', signedUp: false },
				{ id: 'sub-1', name: 'Margrat', price: 'R500.00', signedUp: false },
				{ id: 'sub-1', name: 'Nuli', price: 'R1500.00', signedUp: false },
				{ id: 'sub-1', name: 'Sheryl', price: 'R5000.00', signedUp: false },
				{ id: 'sub-1', name: 'Amanda', price: 'R5000.00', signedUp: false }

			],
			validationErrors: {},
			submitted: 0
		}

		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleCompletedToggle = this.handleCompletedToggle.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleOnSubmit = this.handleOnSubmit.bind(this);
		this.validateFields = this.validateFields.bind(this);
	}

	handleOnChange(e) {
		const target = e.target;
		const name = target.name;
		const value = target.value;
	}

	handleCompletedToggle(e) {
		const target = e.target;
		const itemindexValue = target.attributes.itemindex.value
		const index = parseint(itemindexValue, 10)

		console.log('Toggling: ' + index);
		
		const newSubscriptionsItemState = [...this.state.availableSubscriptions];
		newSubscriptionsItemState[index].completed = target.checked;
		
		this.setState({
			availableSubscriptions: newSubscriptionsItemState;
		})
	}

	handleDelete(e) {
		const target = e.target;
		const itemindexValue = target.attributes.itemindex.value
		const index = parseint(itemindexValue, 10)

		console.log('Deleting: ' + index);
		
		const newSubscriptionsItemState = [...this.state.availableSubscriptions];
		newSubscriptionsItemState.splice(index, 1);

		this.setState({
			availableSubscriptions: newSubscriptionsItemState;
		})
	}

	handleOnSubmit(e) {
		e.preventDefault();
		const isFormValid = this.validateFields();

		if(isFormValid) {
			const newSubscriptionObject = {
				completed: false,
				name: this.state.newitemName
			}
			this.setState((state) => {
				return {
					submitted: state.submitted + 1
					subscriptions: [...state.subscriptions, newSubscriptionObject]
				}
			})
		}
	}
	
	render() {
		const {
			newitemName: newitemNameError,
		} = this.state.validateErrors;
		
		const {
			availableSubscriptions
		} = this.state;
		
		return (
			<>
				<section>
					<h3>Select Subscription</h3>
					{ !availableSubscriptions.length && <p>No items!</p> }
					<ul>
						{
							availableSubscriptions.map((item, index) => {
								return (
									// <li key={index}>
									<li key={item.id}>
										<input
											type="checkbox"
											checked={item.completed}
											onChange={this.handleCompletedToggle}
											itemindex={index} // lowercase 'itemindex' as per React docs
										/>
										<span>{item.name}</span>
										<button
											itemindex={index}
											onClick={this.handleDelete}
										>
										✕
										</button>
									</li>
								)
			})
		}
		</ul>
		<form onSubmit={this.handleOnSubmit}>
		<label>
		<span className="error">{newItemNameError}</span>
		<input
		type="text"
		name="newItemName"
		placeholder="Bananas"
		value={this.state.newItemName}
		onChange={this.handleOnChange}
		/>
		</label>

		<button type="submit">Submit</button>

		<p>Submitted {this.state.submitted} times!</p>
		</form>
		</section>
		</>
		)
	} 
}