import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/globalContext';
import Button from './Button';

export const StyledContainer = styled.div`
    display: flex;
    width: 340px;
    height: 40px;
    position: relative;
    justify-content: flex-start;
    border-bottom: 1.3px solid ${({theme}) => theme.borderGrey};
`;

const ButtonContainer = () => {
    const { isUsersDisplayed } = useContext(GlobalContext);

    return (
        <StyledContainer>
            <Button title={'Users'}
                color={ isUsersDisplayed ? ({theme}) =>theme.fontGreen : ({theme}) =>theme.black }
                buttonActive={isUsersDisplayed ? ({theme}) =>theme.fontGreen : 'none'}
                index={1}
            />
            <Button title={'Integrations'}
                color={ !isUsersDisplayed ? ({theme}) =>theme.fontGreen : ({theme}) =>theme.black }
                buttonActive={isUsersDisplayed ? 'none' : ({theme}) =>theme.fontGreen}
                index={2} 
            />
        </StyledContainer>
    )
}

export default ButtonContainer;