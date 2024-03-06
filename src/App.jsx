import ContactPage from './components/ContactPage';
import { useState } from 'react';
function App() {
  const [mode, setMode] = useState();

  return (
    <>
      <ContactPage mode={mode} setMode={setMode} />
    </>
  );
}

export default App;
