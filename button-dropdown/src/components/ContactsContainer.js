import React, { useContext } from 'react';
import styled from 'styled-components';
import Contact from './Contact';
import { GlobalContext } from '../context/globalContext';

export const StyledContact = styled.div`
    display: flex;
    flex-direction: column;
    width: 320px;
    height: auto;
    margin: 10px;
`;

const ContactsContainer = () => {
    const { isUsersDisplayed,
            contacts,
            brands,
            searchWord } = useContext(GlobalContext);

    const contactsDisplay = contacts.filter(contact => {
        return searchWord === '' ? contact :
        contact.name.toLowerCase().includes(searchWord.toLowerCase()) ?
            contact : null
    }).map(contact => {
        return (
            <Contact contact={contact}
                key={contact.id}
                // isSelectedContact={isSelectedContact}
            />
        )
    })
    const brandsDisplay = brands.filter(brand => {
        return searchWord === '' ? brand :
        brand.name.toLowerCase().includes(searchWord.toLowerCase()) ?
            brand : null
    }).map(brand => {
        return (
            <Contact contact={brand}
                key={brand.id}
            />
        )
    })

    return (
        <StyledContact>
            { isUsersDisplayed && contactsDisplay  }
            { !isUsersDisplayed && brandsDisplay  }
        </StyledContact>
    )
}

export default ContactsContainer;