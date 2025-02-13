import { useEffect, useRef } from 'react';
import {
  AutocompleteCustomization,
  // AutocompleteFunc,
  // RadioGroup,
  // Autocomplete,
} from './components';

function App() {
  const divRef = useRef();
  const nested = useRef();

  function click(color) {
    console.log(color);
  }

  useEffect(() => {
    divRef.current.addEventListener('click', () => click('RED'));
    divRef.current.addEventListener('click', () => click('BLUE'));
  }, []);

  return (
    <>
      <AutocompleteCustomization />
      <div
        ref={divRef}
        // onClick={() => console.log('red')}
        style={{ width: '100px', height: '100px', background: 'red' }}
      >
        <div
          ref={nested}
          // onClick={() => console.log('blue')}
          style={{ width: '50px', height: '50px', background: 'blue' }}
        ></div>
      </div>
    </>
  );
}

export default App;
