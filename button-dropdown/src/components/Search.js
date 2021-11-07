import React, {useContext} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '../context/globalContext';

export const StyledSearch = styled.div`
    margin: 15px 17px 10px;
    border-radius: 5px;

    div {
        display: flex;
        width: 306px;
        height: 37px;
        background: ${({ theme }) => theme.white};
        border-radius: 5px;
        align-items: center;
        border: 1px solid ${({ theme }) => theme.lightGrey};
    }

    div:hover {
        border: 1px solid ${({ theme }) => theme.hoverGrey};
    }

    div:focus-within {
        border: 1px solid ${({ theme }) => theme.focusGrey};
    }

    .fa-search {
        margin: 0 4px 0 12px;
        font-size: 18px;
        padding-left: 4px;
        color: ${({ theme }) => theme.hoverGrey};
    }

    input {
        flex: 1;
        transition: 0.5s;
        border-radius: 5px;
        margin: 0;
        padding: 8px;
        border: none;
        outline: none;
        ::placeholder {
            color: ${({ theme }) => theme.hoverGrey};
        }
    }
`;

const Search = () => {
    const { searchWord, setSearchWord  } = useContext(GlobalContext);
    return (
        <StyledSearch>
            <div>
                <span>
                    <FontAwesomeIcon className="fa-search" icon={faSearch} />
                </span>
                <input type="text"
                    placeholder="Search options"
                    onChange={(e) => setSearchWord(e.target.value)}
                    value={searchWord}
                />
            </div>
        </StyledSearch>
            
    )
}

export default Search ;