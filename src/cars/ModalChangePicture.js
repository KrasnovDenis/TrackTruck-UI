import React, {Component} from 'react';
import {HOST_URL} from "../application-config.json";
import axios from 'axios';
import {Button} from "@material-ui/core";

const carId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

export default class ModalChangePicture extends Component {

    state = {
        selectedFile: null
    };

    onFileChange = event => {
        this.setState({selectedFile: event.target.files[0]});
    };

    onFileUpload = () => {
        if (!this.state.selectedFile) {
            return;
        }

        const formData = new FormData();
        formData.append(
            "files",
            this.state.selectedFile
        );
        axios.put(`${HOST_URL}/api/cars/picture/${carId}`, formData);
    };

    render() {
        return (
            <div>
                <label htmlFor="btn-upload">
                    <input
                        id="btn-upload"
                        name="btn-upload"
                        style={{display: 'none'}}
                        type="file"
                        onChange={this.onFileChange}/>
                    <Button
                        className="btn-choose"
                        variant="outlined"
                        component="span">
                        Выбрать картинку
                    </Button>
                </label>
                <Button onClick={this.onFileUpload}>Применить</Button>

            </div>
        );
    }

}