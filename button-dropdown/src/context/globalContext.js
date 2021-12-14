import React, {createContext, useEffect, useState} from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faShopify, faInstagram, faUber, faAlgolia  } from '@fortawesome/free-brands-svg-icons';

export const GlobalContext = createContext();

const DropDownContextProvider = (props) => {
    const [isUsersDisplayed, setIsUsersDisplayed] = useState(true)
    const [isTagButtonOn, setIsTagButtonOn] = useState(false)
    const [isContactSelected, setIsContactSelected] = useState({
        value: true,
        id: null
    })
    const [contactsList, setContactsList] = useState([])
    const [searchWord, setSearchWord] = useState('')
    const [tagButtonState, setTagButtonState] = useState({
        first: null,
        second: null
    })
    const [isSelectedContact, setIsSelectedContact] = useState(false)

    useEffect(() => {
        // Load from storage
        if (typeof Storage !== 'undefined') {
            // localStorage supported.
            const contactsData = JSON.parse(localStorage.getItem('contactsList'));
            if (contactsData) {
                setContactsList(contactsData);
            }
        } else {
            // Using cookies here :(
            let contactsData = document.cookie;
            if (contactsData !== '') {
                contactsData = contactsData.split('; ');
                const decodedContacts = [];
                contactsData.forEach((contact) => {
                    const splitContact = contact.split('=');
                    decodedContacts.push({
                        id: splitContact[0],
                        name: splitContact[1],
                    });
                });
                setContactsList(decodedContacts);
            }
        }
    }, []);

    useEffect(() => {
        // save to storage
        if (typeof Storage !== 'undefined') {
            // localStorage supported.
            localStorage.setItem('contactsList', JSON.stringify(contactsList));
        } else {
            // Using cookies here :(
            const contactsData = contactsList;
            contactsData.forEach((contact) => {
                document.cookie = `${contact.id}=${contact.name}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
            });
        }
    }, [contactsList]);

    const contacts = 
        [
            { 'id': 1, 'name': 'Louie Popp', 'icon': faUser },
            { 'id': 2, 'name': 'Jonas Rafn', 'icon': faUser },
            { 'id': 3, 'name': 'Fiona Rakipi', 'icon': faUser },
            { 'id': 4, 'name': 'Martin Navne', 'icon': faUser },
            { 'id': 5, 'name': 'Kristoffer Degn', 'icon': faUser }
        ]
    const brands = 
    [
        { 'id': 11, 'name': 'ActiveCampaign', 'icon': faAlgolia },
        { 'id': 12, 'name': 'Google Analytics', 'icon': faGoogle },
        { 'id': 13, 'name': 'Instagram', 'icon': faInstagram  },
        { 'id': 14, 'name': 'Woocommerce', 'icon': faUber  },
        { 'id': 15, 'name': 'Shopify', 'icon': faShopify  }
    ]

    const handleUsersClick = (index) => {
        index === 1 ? setIsUsersDisplayed(true) : setIsUsersDisplayed(false)
    }

    const handleButtonClick = () => {
        setIsTagButtonOn(!isTagButtonOn)
        const buttonState = tagButtonState
        buttonState.second = buttonState.first
        buttonState.first = !isTagButtonOn
        setTagButtonState(buttonState)
    }

    const handleContactClick = (id, name) => {
        if (isContactSelected.id === id) {
            setIsContactSelected({...isContactSelected, value: false, id: null})
        } else {
            setIsContactSelected({...isContactSelected, value: true, id})
        }
        if (!contactsList.some(contact => contact.id === id)) {
            setContactsList([...contactsList, {id, name}])
        }
    }

    const deleteContact = (id) => {
        setContactsList(contactsList.filter((contact) => contact.id !== id))
    }

    return (
        <GlobalContext.Provider 
            value={{isUsersDisplayed,
                    isTagButtonOn,
                    tagButtonState,
                    isContactSelected,
                    isSelectedContact,
                    setIsSelectedContact,
                    contactsList,
                    searchWord,
                    setSearchWord,
                    contacts,
                    brands,
                    deleteContact,
                    handleUsersClick,
                    handleButtonClick,
                    handleContactClick
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default DropDownContextProvider;