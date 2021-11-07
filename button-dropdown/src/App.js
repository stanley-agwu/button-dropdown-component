import TagButton from './components/TagButton';
import DropDown from './components/DropDown';
import SelectedDisplay from './components/SelectedDisplay';
import styled from 'styled-components';
import DropDownContextProvider from './context/globalContext';

const StyledApp = styled.div`
  position: absolute;
  left: 30%;
  top: 20%;
  width: 769px;
  height: 559px;
  background: ${({theme}) => theme.white};
  display: block;
  padding: 100px 200px;
  box-sizing: border-box;
`

function App() {
  return (
    <StyledApp>
      <div>
        <DropDownContextProvider>
          <TagButton />
          <DropDown />
          <SelectedDisplay />
        </DropDownContextProvider>
      </div>
    </StyledApp>
  );
}

export default App;
