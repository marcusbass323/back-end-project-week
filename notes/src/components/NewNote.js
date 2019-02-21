import React, { Component } from 'react';
import axios from 'axios';

const endpoint ='http://localhost:5000/create'

export default class NewCustomer extends Component {

    state = {
        title: '',
        content: '',
        isSubmitted: false,
        error: false
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()

        axios.post(`${endpoint}`, {
            title: this.state.title,
            content: this.state.content,
        })
            .then(res => {
                this.setState({
                    isSubmitted: true,
                    error: false
                })
                console.log(res)
            })
            .catch(error => {
                this.setState({
                    error: true,
                    isSubmitted: false
                })
            })
        

    }
    
    render() {
        return (
            <div>
<h1>Create New Note</h1>
            
            
            <form
                onSubmit={this.submitHandler}         
                >
                    <div>
                    <input
                    type="text"
                    className='form-control'
                            name='title'
                            placeholder="Note Title"
                    value={this.state.title}                  
                    onChange={this.changeHandler}
                />
                    </div>
                    <div >
                    <textarea
                    type="text"
                    className='form-contro'
                            name='content'
                            placeholder="Note Content"
                    rows="5"        
                    value={this.state.content}
                    onChange={this.changeHandler}
                />
                </div>

                
                
                <button
                    type='submit'
                    className='btn btn-success'
                >
                    Submit
                </button>

                {this.state.isSubmitted && <p>Note Successfully Added</p>}
                {this.state.error && <p>Failed to add Note</p>}

            </form>

            </div> 
        )
    }
}