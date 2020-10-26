import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../images/smarkets1.svg';
import { ReactComponent as Menu } from '../images/menu.svg';

const StyledHeader = styled.header`
  max-width: 80%;
  margin: 0 auto;
  padding: 20px 45px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`

const LogoExtension = styled.h3`
  display: inline-block;
  padding: 4px 0 0 10px;
  color: #0CCD93;
`

const MenuContainer = styled.div`
    padding: 5px 0 0 0;
    width: 24px;
    height: 24px;
    transition: .4s ease-out;
    color: #EBEBEB;
    &:hover {
        cursor: pointer;
        color: #0CCD93;

        ${Menu} .first {
            transition: .4s ease-out;
            transform: translate(0, -1px);
        }
        
        ${Menu} .last {
            transition: .4s ease-out;
            transform: translate(0, 1px);
        }
    }
`

const Header = () => {
    return (
        <StyledHeader>
            <LogoContainer>
                <Logo />
                <LogoExtension>Simplified</LogoExtension>
            </LogoContainer>
            <MenuContainer>
                <Menu />
            </MenuContainer>
        </StyledHeader>
    );
}

export default Header;