import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import EventItem from './EventItem';

const TileContainer = styled.ul`
    max-width: 80vw;
    list-style: none;
    margin: 3rem auto;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const EventTitle = styled.div`
    color: #EBEBEB;
    margin: 3rem auto 5rem auto;
    font-size: 28px;
    text-align: center;
    line-height: 1.5;
`

const EventContent = () => {
    const api = {
        base: 'https://cors-anywhere.herokuapp.com/',
        primary: 'https://api.smarkets.com/v3/popular/event_ids/?limit=10&inplay_enabled=true',
        secondary: 'https://api.smarkets.com/v3/events/'
      }
      
    const [eventsList, setEventsList] = useState('');

    useEffect(() => {
        fetch(`${api.base + api.primary}`)
        .then(res => res.json())
        .then(result => {
            setEventsList(result.popular_event_ids.join())
        })
        .catch(err => {
        console.log("Error: " + err)
        })
        // eslint-disable-next-line
    }, []);


    return (
        <>
            <EventTitle>Hi! Here are the top events.</EventTitle>
            <TileContainer>
                {
                eventsList && <EventItem api={api} eventsList={eventsList} />
                }
            </TileContainer>
        </>
    )
}

export default EventContent;