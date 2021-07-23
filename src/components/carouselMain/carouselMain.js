import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './carouselMain.css'

const items = [
  {
    src: process.env.REACT_APP_BASE_URL+'banner1.jpg',
    altText: 'Slide 1',
    caption: '',
    key: '1'
  },
  {
    src: process.env.REACT_APP_BASE_URL+'banner2.jpg',
    altText: 'Slide 2',
    caption: '',
    key: '2'
  },
  {
    src: process.env.REACT_APP_BASE_URL+'banner3.jpg',
    altText: 'Slide 3',
    caption: '',
    key: '3'
  }
];

const carouselMain = () => <UncontrolledCarousel items={items} indicators={true}/>;

export default carouselMain;