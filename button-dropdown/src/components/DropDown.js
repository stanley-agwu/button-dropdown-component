import React, { useContext } from 'react';
import styled from 'styled-components';
import ButtonContainer from './ButtonContainer';
import ContactsContainer from './ContactsContainer';
import Search from './Search';
import { GlobalContext } from '../context/globalContext';

export const StyledDropDown = styled.div`
    width: 340px;
    height: auto;
    display: ${({isTagButtonOn}) => isTagButtonOn ? 'block' : 'none'};
    background: ${({theme}) => theme.white};
    border: 1px solid ${({theme}) => theme.darkerWhite};
    box-sizing: border-box;
    box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin-top: 20px;
`;

export const StyledOptionContainer = styled(StyledDropDown)`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: none;
    border-radius: 0 0 5px 5px;
    margin-top: 0;
`;

const DropDown = () => {
    const { isTagButtonOn } = useContext(GlobalContext);
    return (
        <StyledDropDown isTagButtonOn={isTagButtonOn} >
            <ButtonContainer />
            <StyledOptionContainer>
                <Search />
                <ContactsContainer />
            </StyledOptionContainer>
        </StyledDropDown>
    )
}

export default DropDown;