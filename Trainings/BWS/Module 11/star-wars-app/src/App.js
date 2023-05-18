import React, { Component } from 'react'

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      "loadedCharacter": false,
    };
  }

  genCharacter() {
    const id = Math.round(Math.random() * 80) + 1;
    const url = `https://akabab.github.io/starwars-api/api/id/${id}.json`;
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          "loadedCharacter": true,
          "name": data.name,
          "height": data.height,
          "homeworld": data.homeworld,
          "image": data.image,
          "species": data.species,
          "affiliations": data.affiliations,
        });
        console.log(data);
      })
  }

  render() {
    return (
      <div className='container'>
        {
          !this.state.loadedCharacter &&
          <img className='logo' src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG8.png" alt="" />
        }
        {
          this.state.loadedCharacter && (
            <div className='character-wrapper'>
              <h1>{this.state.name}</h1>
              <p>Height : {this.state.height} m</p>
              <p>Home World : {this.state.homeworld}</p>
              <p>Species : {this.state.species}</p>
              <div className='affiliations'>
                <p>Affiliations :</p>
                <ul>
                  {this.state.affiliations.map((info, i) => <li key={i}>{`• ${info}`}</li>)}
                </ul>
              </div>
              <div className='image-container'>
                <img src={this.state.image} alt="image" />
              </div>
            </div>
          )
        }
        <button onClick={() => this.genCharacter()} className='gen-btn'>Generate Character</button>
      </div>
    )
  }
}
