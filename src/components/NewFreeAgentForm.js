import React from 'react';

class NewFreeAgentForm extends React.Component {
    constructor(props) {
        super(props);
        this.formDidSubmit = this.formDidSubmit.bind(this);

        // set an error state for form submission
        this.state = {
            error: undefined
        };
    }

    // The form was submitted. We need to wrap the form submission into a function 
    // so that we can attach the form data
    formDidSubmit(e) {
        e.preventDefault();

        const player = {
            name: e.target.elements.yourName.value.trim(),
            gender: e.target.elements.yourGender.value.trim(),
            message: e.target.elements.yourMessage.value.trim()
        };
        const error = this.props.handleAddPlayer(player);

        // update the state
        this.setState(() => {
            return { error };
        });

        if (!error) {
            e.target.elements.yourName.value = '';
            e.target.elements.yourGender.value = 'Male';
            e.target.elements.yourMessage.value = '';
        }
    }

    render() {
        return (
            <div className="new-free-agent-form">
                <h3>Add a New Free Agent</h3>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.formDidSubmit}>
                    <div className="form-group flex-form-group">
                        <label>Name: </label>
                        <input type="text" name="yourName" />
                    </div>
                    <div className="form-group flex-form-group">
                        <label>Gender: </label>
                        <select name="yourGender">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <p>Your Message: </p>
                        <textarea className="item-block" name="yourMessage"></textarea>
                    </div>
                    <div className="form-group">
                        <button className="button item-block">Submit Your Name</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default NewFreeAgentForm;