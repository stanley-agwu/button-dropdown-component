import React, {useContext} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '../context/globalContext';

export const StyledSelectedDisplay = styled.div`
    margin: 20px 0 0;
    display: inline-flexbox;
    width: 340px;
    height: auto;
    box-sizing: border-box;
    color: ${({theme}) => theme.focusGrey};
    flex-wrap: wrap;

    .fa-times {
        margin-left: 10px;
        cursor: pointer;
    }
    .contact {
        /* min-width: 144px; */
        height: 25px;
        display: flex;
        padding: 5px 10px;
        margin: 0 10px 10px 0;
        background-color: ${({theme}) => theme.displayTextBG};
        border-radius: 50px;
        align-items: center;
        justify-content: center;
    }
    
`;

const SelectedDisplay = () => {
    const { contactsList, deleteContact } = useContext(GlobalContext);

    return contactsList.length ? (
        <StyledSelectedDisplay>
            {contactsList.map(contact => {
                return (
                    <div className='contact'>
                        <span>{contact.name}</span>
                        <span onClick={() => deleteContact(contact.id)}>
                            <FontAwesomeIcon className="fa-times" icon={faTimesCircle} />
                        </span>
                    </div>
                )
            }) 
        }
        </StyledSelectedDisplay>   
    ): null
}

export default SelectedDisplay;