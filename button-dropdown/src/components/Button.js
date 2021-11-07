import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GlobalContext } from '../context/globalContext';

export const StyledButton = styled.div`
    width: fit-content;
    font-weight: ${({buttonActive}) => buttonActive === 'none' ? 'normal' : 600 };
    height: auto;
    color: ${({color}) => color};
    display: flex;
    margin: 0 10px;
    padding: 5px 0;
    position: relative;
    align-items: flex-end;
    justify-content: center;
    cursor: pointer;
    box-sizing: content-box;
    border-bottom: 1.3px solid ${({buttonActive}) => buttonActive};
    margin-bottom: ${({buttonActive}) => buttonActive === 'none' ? 0 : '-1.3px' };

    &:hover {
        color: ${({theme}) => theme.hoverTextGreen};
    }
`;

const Button = ({title, color, index, buttonActive }) => {
    const { handleUsersClick } = useContext(GlobalContext);

    return (
        <StyledButton color={color}
            onClick={() => handleUsersClick(index)}
            buttonActive={buttonActive}
         >
            {title}
        </StyledButton>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    buttonActive: PropTypes.string.isRequired
};

export default Button;