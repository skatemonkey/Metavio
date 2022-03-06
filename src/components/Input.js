import React, { Component } from 'react';
function Input() {
    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault()
                const description = this.imageDescription.value
                this.props.uploadImage(description)
            }} >
                <input type='file' accept=".jpg, .jpeg, .png, .bmp, .gif" onChange={this.props.captureFile} />
                <div className="form-group mr-sm-2">
                    <br></br>
                    <input
                        id="imageDescription"
                        type="text"
                        ref={(input) => { this.imageDescription = input }}
                        className="form-control"
                        placeholder="Image description..."
                        required />
                </div>
                <button type="submit" className="btn btn-primary btn-block btn-lg">Upload!</button>
            </form>
        </div>
    )
}

export default Input