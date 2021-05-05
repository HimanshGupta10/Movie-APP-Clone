import React, { useEffect, useState } from 'react'
import { Row, Button } from 'antd';

import { API_URL, API_KEY} from '../../Config'
import GridCards from '../../commons/GridCards';
import MainHeader from './sections/MainHeader';

function ActorDetailPage(props) {

    const actorId = props.match.params.actorId
    const movieId = props.match.params.movieId
    const [Actor, setActor] = useState([])
    const [Profiles, setProfiles] = useState([])
    const [LoadingForActor, setLoadingForActor] = useState(true)
    const [LoadingForProfiles, setLoadingForProfiles] = useState(true)
    const [ProfileToggle, setActorToggle] = useState(false)
    const movieVariable = {
        movieId: movieId
    }

    useEffect(() => {

        let endpointForActor = `${API_URL}person/${actorId}?api_key=${API_KEY}&language=en-US`;
        fetchDetailInfo(endpointForActor)

    }, [])

    const toggleProfileView = () => {
        setActorToggle(!ProfileToggle)
    }

    const fetchDetailInfo = (endpoint) => {

        fetch(endpoint)
            .then(result => result.json())
            .then(result => {
                console.log(result)
                setActor(result)
                setLoadingForActor(false)
        
                let endpointforMainimg = `${API_URL}person/${actorId}/images?api_key=${API_KEY}`;
        
                fetch(endpointforMainimg)
                    .then(result => result.json())
                    .then(result => {
                        console.log(result.profiles)
                        setProfiles(result.profiles)
                    })

                setLoadingForProfiles(false)
            })
            .catch(error => console.error('Error:', error)
            )
    }


    return (
        <div>
            {/* Header */}
            {!LoadingForActor ?
                <MainHeader
                    title={Actor.name}
                    text={Actor.biography}
                />
                :
                <div>loading...</div>
            }


            {/* Body */}
            <div style={{ width: '85%', margin: '1rem auto' }}>

                <br />
                {/* Actors Grid*/}

                <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
                    <Button shape='round' type='primary' style={{ width: '20%', height: '45px', fontSize:'Medium'}} onClick={toggleProfileView}>View Images</Button>
                </div>

                {ProfileToggle &&
                    <Row gutter={[16, 16]}>
                        {
                            !LoadingForProfiles ? Profiles.map((profile, index) => (
                                profile.file_path &&
                                <GridCards actor image={profile.file_path} characterName={Actor.name} actorDetail={Actor.biography}/>
                            )) :
                                <div>loading...</div>
                        }
                    </Row>
                }
                <br />

            </div>

        </div>
    )
}

export default ActorDetailPage

