import React, {useContext} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '../context/globalContext';

export const StyledTagButton = styled.div`
    width: 118px;
    height: 40px;
    border: 1.2px solid ${({ theme }) => theme.green};
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.green};

    &:hover {
        color: ${({theme}) => theme.hoverTextGreen};
        border: 1.2px solid ${({ theme }) => theme.hoverTextGreen};
    }
    .button-title{
        width: 68px;
        height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
        
    .fa-plus {
        margin-right: 9px;
    }
`;

const TagButton = () => {
    const { handleButtonClick } = useContext(GlobalContext);
    return (
        <StyledTagButton onClick={handleButtonClick} >
            <span><FontAwesomeIcon className="fa-plus" icon={faPlus} /></span>
            <span className="button-title">Add Filter</span>
        </StyledTagButton>
            
    )
}

export default TagButton;