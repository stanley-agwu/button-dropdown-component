import React, {useContext} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropType from 'prop-types';
import { GlobalContext } from '../context/globalContext';

export const StyledContact = styled.div`
    display: flex;
    box-sizing: border-box;
    padding: 3px;
    color: ${({theme, selectedID, contact}) => selectedID === contact.id ? theme.white : theme.textGrey };
    align-items: center;
    width: 320px;
    height: 33px;
    background: ${({theme, selectedID, contact}) => selectedID === contact.id ? theme.green : theme.white};
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background: ${({theme}) => theme.hoverGreen};
        color: ${({theme}) => theme.white};
        
        .fa-icon {
            background-color: ${({theme}) => theme.iconHoverBG};
        }
    }

    .active {
        background: ${({theme}) => theme.green};
        color: ${({theme}) => theme.white};
    }

    .faUser {
        font-size: 18px;
        color: ${({theme}) => theme.textGrey};
        text-align: center;
    }
    .contact-name {
        padding: 5px;
        margin-left: 10px;
    }
    .fa-icon {
        padding: 6px 3px 3px;
        margin-right: 5px;
        width: 25px;
        height: 25px;
        background-color: ${({theme, selectedID, contact}) => selectedID === contact.id ? theme.iconHoverBG : theme.iconBG};
        border-radius: 3px;
        align-content: center;
    }
`;

const Contact = ({contact}) => {
    const { handleContactClick, isContactSelected, setSearchWord }= useContext(GlobalContext);
    
    return (
        <StyledContact
            onClick={(() => {
                handleContactClick(contact.id, contact.name)
                setSearchWord('')
                }
            )}
            selectedID={isContactSelected.id}
            contact={contact}
        >
            <div>
                <span className='fa-icon'><FontAwesomeIcon className="faUser" icon={contact.icon} /></span>
                <span className='contact-name'>{contact.name}</span>
            </div>
        </StyledContact>
    )
}

Contact.propTypes = {
    contact: PropType.shape({}).isRequired,
}

export default Contact;