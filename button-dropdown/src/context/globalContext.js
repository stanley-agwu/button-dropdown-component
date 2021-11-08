import React, { createContext, useState, useEffect } from 'react';
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

    useEffect(() => {
        // Loading Data from local Storage
        const contactsData = JSON.parse(sessionStorage.getItem('contactsList'));
        if (contactsData) {
            setContactsList(contactsData);
        } 
    }, []);

    // save Data to local Storage
    localStorage.setItem('contactsList', JSON.stringify(contactsList));

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
    }
    const handleContactClick = (id, name) => {
        if (isContactSelected.id === id) {
            setIsContactSelected({...isContactSelected, value: false, id: null})
        } else {
            setIsContactSelected({...isContactSelected, value: true, id})
        }
        if (!contactsList.some(item => item.id === id)) {
            const contact = contactsList
            contact.push({id, name})
            setContactsList(contact) 
        }
    }
    const deleteContact = (id) => {
        setContactsList(contactsList.filter((contact) => contact.id !== id))
    }

    return (
        <GlobalContext.Provider 
            value={{isUsersDisplayed,
                    isTagButtonOn,
                    isContactSelected,
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