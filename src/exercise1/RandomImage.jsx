import React, { useState, useEffect } from 'react';
import { Image } from '@chakra-ui/react';

class RandomImage extends React.Component {
  state = {
    imageUrl: undefined,
  };

  componentDidMount = () => {
    this.fetchRandomImage();
  };

  fetchRandomImage = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    const characters = data.results;
    const character = characters[Math.floor(Math.random() * characters.length)];
    this.setState({ imageUrl: character.image });
  };

  render() {
    const { imageUrl } = this.state;

    return <Image src={imageUrl} />;
  }
}

export default RandomImage;



