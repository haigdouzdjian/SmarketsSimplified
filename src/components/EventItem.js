import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import Tile from './Tile';

const EventItem = (props) => {
    const [eventData, setEventData] = useState('')
  
    useEffect(() => {
      fetch(`${props.api.base + props.api.secondary + props.eventsList}/`)
      .then(res => res.json())
      .then(result => {
        setEventData(result)
      })
      .catch(err => {
        console.log("Error: " + err)
      })
      // eslint-disable-next-line
    }, []);

    return (
        <>
            {
                eventData && eventData.events.map((e, key) => <Tile key={key} data={e} />)
            }
        </>
    )
  }

  EventItem.propTypes = {
      api: PropTypes.object,
      eventsList: PropTypes.string
  }

  export default EventItem;