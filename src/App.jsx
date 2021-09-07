import './App.css';
import { useState } from 'react';
import Editor from './components/SlateEditor/Editor';
function App() {
  const [slateHtml, setSlateHtml] = useState();
  const onEditorChange = (value) => {
    setSlateHtml(value);
  };
  return (
    <div className="App">
      <Editor onData={onEditorChange} />
    </div>
  );
}

export default App;
