import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 98;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(3px);
`

const ModalContainer = styled.div`
    position: relative;
    z-index: 99;
    width: 100%;
    max-width: 20rem;
    max-height: 100%;
    margin: 0 auto;
`

const ModalClose = styled.button`
    position: absolute;
    top: 20px;
    left: 360px;
    font-size: 20px;
    border: 0;
    -webkit-appearance: none;
    background: none;
    color: #EBEBEB;
    cursor: pointer;
    transition: .4s ease-out;

    &:hover {
        color: #0CCD93
    }
`

const ModalBody = styled.div`
    width: 400px;
    height: 300px;
    background: #2b2a2d;
    border-radius: 6px;
    box-shadow: 0 0 0 1px rgba(0,0,0,0.1), 0 20px 60px 10px rgba(0,0,0,0.2);
`

const Header = styled.p`
    margin: 0;
    font-size: 20px;
    padding: 20px 30px 15px 20px;
    color: #EBEBEB;
    max-width: 100%;
    font-weight: 700;
    border-bottom: 1px solid #EBEBEB;
`

const Children = styled.p`
    font-size: ${props => props.size};
    font-weight: ${props => props.weight};
    padding: 1px 0 0 ${props => props.pad};
    color: #EBEBEB;
`

const Modal = (props) => {
    const res = props.show && (
        <ModalOverlay>
            <ModalContainer>
                <ModalClose onClick={() => props.setShow(false)}>
                    x
                </ModalClose>
                <ModalBody>
                    <Header>
                        More Info
                    </Header>
                    <Children size="18px" weight="400" pad="20px">
                        {props.name}
                    </Children>
                    {
                        props.arr && props.arr.map((e, key) => <Children size="16px" weight="300" pad="40px" key={key}>{e}</Children>)
                    }
                </ModalBody>
            </ModalContainer>
        </ModalOverlay>
    )

    return res;
}

Children.propTypes = {
    size: PropTypes.string,
    weight: PropTypes.string,
    pad: PropTypes.string,
}

Modal.propTypes = {
    arr: PropTypes.array,
    name: PropTypes.string,
    show: PropTypes.bool,
    setShow: PropTypes.func
}

export default Modal;