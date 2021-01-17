import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'


class EditProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return(
      <>
        <Form>
            <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' />
            </Form.Field>
            <Form.Field>
                <label>Username</label>
                <input placeholder='Last Name' />
            </Form.Field>
            <Form.Field>
                <label>Location</label>
                <select>
                <option>Africa</option>
                </select>
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit'>Update</Button>
        </Form>
      </>
    )
  }
}

export default EditProfile
