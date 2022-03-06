import React, { Component } from 'react';
import Identicon from 'identicon.js';
import { SparklesIcon } from "@heroicons/react/outline";
import './App.css';
import './Feed.css'

class Feed extends Component {

  render() {
    return (
      <div className='feed_section sm:ml-[73px] xl:ml-[370px]'>
        {/* feed header */}
        <div className='feed_header sm:justify-between'>
          <h2 className='sm:text-xl'>Home</h2>
          <div className='header_icon xl:px-0'>
            <SparklesIcon className="sparkle_icon" />
          </div>
        </div>

        {/* Input */}
        <div className='input'>
          <form onSubmit={(event) => {
            event.preventDefault()
            const description = this.imageDescription.value
            this.props.uploadImage(description)
          }} >

            <input type='file' accept=".jpg, .jpeg, .png, .bmp, .gif" onChange={this.props.captureFile} />

            <div className="divide-y divide-gray-700 w-full">
              <br></br>
              <input
                id="imageDescription"
                type="text"
                ref={(input) => { this.imageDescription = input }}
                className="form-control"
                placeholder="Image description..."
                required />
            </div>
            <br></br>
            <button type="submit" className="btn btn-primary btn-block btn-lg">Upload!</button>
          </form>
        </div>

        {/* Display all the images */}
        {this.props.images.map((image, key) => {
          return (
            <div className="card mb-4" key={key} >
              <div className="card-header">
                <img
                  className='mr-2'
                  width='30'
                  height='30'
                  src={`data:image/png;base64,${new Identicon(image.author, 30).toString()}`}
                />
                <small className="text-muted">{image.author}</small>
              </div>
              <ul id="imageList" className="list-group list-group-flush">
                <li className="list-group-item">
                  <p class="text-center"><img src={`https://ipfs.infura.io/ipfs/${image.hash}`} style={{ maxWidth: '420px' }} /></p>
                  <p>{image.description}</p>
                </li>
                <li key={key} className="list-group-item py-2">
                  <small className="float-left mt-1 text-muted">
                    TIPS: {window.web3.utils.fromWei(image.tipAmount.toString(), 'Ether')} ETH
                  </small>
                  <button
                    className="btn btn-link btn-sm float-right pt-0"
                    name={image.id}
                    onClick={(event) => {
                      let tipAmount = window.web3.utils.toWei('0.1', 'Ether')
                      console.log(event.target.name, tipAmount)
                      this.props.tipImageOwner(event.target.name, tipAmount)
                    }}
                  >
                    TIP 0.1 ETH
                  </button>
                </li>
              </ul>
            </div>
          )
        })}
      </div>



    );
  }
}

export default Feed;