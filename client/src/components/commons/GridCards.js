import React from 'react'
import { Col } from 'antd';
import { IMAGE_BASE_URL } from '../Config';

function GridCards(props) {

    let { actor, key, image, movieId, movieName, characterName, actorId, actorDetail } = props
    const POSTER_SIZE = "w154";

    if (actor) {
        return (
            <Col key={key} lg={8} md={12} xs={24}>
                <div style={{ position: 'relative' }}>
                    <a href={`/profile/${actorId}`}>
                    <img style={{ width: '100%', height: '420px' }} alt={characterName} src={`${IMAGE_BASE_URL}${POSTER_SIZE}${image}`} />
                    </a>
                </div>
            </Col>
        )
    }  
    else if(actorDetail){
        return (
            <Col key={key} lg={8} md={12} xs={24}>
                <div style={{ position: 'relative' }}>
                    <img style={{ width: '100%', height: '320px' }} alt={characterName} src={`${IMAGE_BASE_URL}${POSTER_SIZE}${image}`} />
                </div>
            </Col>
        )
    }else {
        return (
            <Col key={key} lg={8} md={12} xs={24}>
                <div style={{ position: 'relative' }}>
                    <a href={`/movie/${movieId}`} >
                        <img style={{ width: '100%', height: '420px' }} alt={movieName} src={image} />
                    </a>
                </div>
            </Col>
        )
    }

}

export default GridCards
