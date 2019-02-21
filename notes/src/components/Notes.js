import React, { Component } from 'react';
import axios from 'axios';
import NewNote from './NewNote'

export default class Notes extends Component {
    
    constructor() {
        super();

        this.state = {
            notes: []
        }

    }

    componentDidMount() {
        const endpoint = 'http://localhost:5000/notes';

        axios.get(endpoint)
            .then(res => {
                console.log('notes data', res.data);
                this.setState({ notes: res.data })
            }).catch(err => {
                console.log('error from api')
            });
    }

        
    
    render() {
        return (
            <div>
                <h1>Notes</h1>
                <NewNote />
                <div className="NotesDisplay">  
                    {this.state.notes.map(notes => (
                        <div key={notes.id}>
                            <div className="NotesContainer">
                                <div className="NotesTitle">
                                {notes.title}   
                                </div>
                                <hr/>
                                {notes.content}
                                </div>
                        </div>
                    ))}
                    
                    </div>
                
            </div>
            
        )
    }
}