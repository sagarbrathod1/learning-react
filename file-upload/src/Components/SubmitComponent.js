import React, { Component, props } from 'react'
import axios, { post } from 'axios';

class SubmitComponent extends Component {

    constructor(prop) {
        super(props);
        this.state = {
            image: ''
        }
    }
 
    onChange(e) {
        let files = e.target.files;
        //console.warn("data file", files)
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            //console.warn("img data ", e.target.result)
            const url = "http://127.0.0.1:8000/api/service";
            const formData = { file: e.target.result }
            return post(url, formData)
            .then(response=>console.warn("result", response))
        }
    }

    render() {
        return (

            <div onSubmit={this.onFormSubmit}>
                <h1>React.js File Upload Tutorial</h1>
                <input type="file" name="file" onChange={(e)=>this.onChange(e)} />

            </div>
        )
    }
}

export default SubmitComponent;
