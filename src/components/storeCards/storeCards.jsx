import React, { useState } from 'react';
import './storeCards.css'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardImgOverlay
} from 'reactstrap';

import ReactStars from "react-rating-stars-component";

import {
  generatePath,
  useHistory,
  useParams
} from "react-router-dom";

const StoreCard = (props) => {
  // const [storeId, setId] = useState(props.shopid);
  const history = useHistory();
  const storeId=props.shopid;

  const handleProceed = (e) => {
    storeId && history.push(generatePath("/store/:storeId",{storeId}));
  };
  
  return (
    <div className='store-card'>
      <Card onClick={(e) => {
              handleProceed();
            }}>
        <CardImg top width="100%" src={process.env.REACT_APP_BASE_URL+props.image} alt={props.name} height="200"/>
         <CardImgOverlay><ReactStars
                        count={5}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                        value={props.ratings}
                    />
          </CardImgOverlay>
        <CardBody>
          <CardTitle tag="h5">{props.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{(props.category).toString()}</CardSubtitle>
          <CardText><i className="fas fa-map-marker-alt"></i>{props.address}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default StoreCard;