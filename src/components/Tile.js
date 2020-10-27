import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as Arrow } from '../images/arrow-right.svg';
import Modal from './Modal';

const ArrowContainer = styled.div`
    opacity: 0;
    width: 20px;
    height: 20px;
    position: absolute;
    right: 30px;
    bottom: 20px;
    transition: .4s ease-in-out;
`

const TileHeading = styled.p`
    font-size: 20px;
    margin: 10px 10px;
    color: #EBEBEB;
`

const TileWrapper = styled.li`
    min-height: 200px;
    display: block;
    position: relative;
    padding: 20px 40px 20px 30px;
    border-radius: 6px;
    color: #EBEBEB;
    background-color: rgba(255, 255, 255, 0.05);
    &:hover {
        transition: transform .4s ease-in-out;
        -ms-transform: scale(1.03);
        -webkit-transform: scale(1.03);
        transform: scale(1.03);
        cursor: pointer; 
        background-color: rgba(255, 255, 255, 0.1);

        & > ${ArrowContainer} {
            transform: translate(5px, 0);
            opacity: 1;
            color: #0CCD93;
        }
    };
`

const TileDate = styled.p`
    font-weight: 300;
    margin: 10px 10px;
`

const TileSportType = styled.p`
    font-weight: 300;
    position: absolute;
    margin: 0 0 0 10px;
    bottom: 20px;
`

const bringDownFade = keyframes`
  from {
      transform: translateY(-50%);opacity: 0;
      }
  to {
      transform: translateY(0);opacity: 1;
      }
`

const ModalWrapper = styled.a`
    text-decoration: none;
    margin: 10px;
    animation: ${bringDownFade} 1s;
`

const formatDate = (s) => {
    var date = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(s).toLocaleDateString([], date);
};

const formatTime = (s) => {
    return new Date(s).toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour12: true });
}

const Tile = (props) => {
    const [show, setShow] = useState(false);

    var name = props.data.name;
    var date = formatDate(props.data.start_datetime);
    var time = formatTime(props.data.start_datetime);
    var type = /[^_]*/.exec(props.data.type)[0] === "american" ? "american football" : /[^_]*/.exec(props.data.type)[0];
    var league = props.data.full_slug ? props.data.full_slug.split("/")[3].replace(/-/g, ' ') : null;
    var shortName = props.data.short_name;

    var arr = [type, league, date, time, shortName];
    return (
        <>
            <ModalWrapper onClick={() => setShow(true)}>
                <TileWrapper>
                    <TileHeading>
                        {name}
                    </TileHeading>
                    <TileDate>
                        {date}
                    </TileDate>
                    <TileSportType>
                        {type}
                    </TileSportType>
                    <ArrowContainer>
                        <Arrow />
                    </ArrowContainer>
                </TileWrapper>
            </ModalWrapper>
            <Modal arr={arr} name={name} show={show} setShow={setShow} />
        </>
    )
}

Tile.propTypes = {
    data: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
}

export default Tile;