import './App.css';
import { useState } from 'react';
import Editor from './components/SlateEditor/Editor';
import axios from 'axios';
function App() {
  const [slateHtml, setSlateHtml] = useState();
  const shtml =
    '<div data-slate-type="alignCenter" style="display:flex;align-items:center;list-style-position:inside;flex-direction:column"><h1 data-slate-type="headingOne">Hey There :)</h1></div><div data-slate-type="alignLeft" style="display:flex;align-items:left;list-style-position:inside;flex-direction:column"><div data-slate-type="paragraph">This is a full-featured rich text editor made using <a data-slate-type="link" href="https://github.com/ianstormtaylor/slate" target="_blank">Slate.js</a></div><div data-slate-type="paragraph"><span data-slate-type="color" data-color="rgb(102, 185, 102)" style="color:rgb(102, 185, 102)"><em data-slate-type="italic"><strong data-slate-type="bold">Some Key Features :- </strong></em></span></div><ul data-slate-type="unorderedList"><li data-slate-type="list-item"><span data-slate-type="color" data-color="rgb(0, 0, 0)" style="color:rgb(0, 0, 0)">Resizable Tables</span></li><li data-slate-type="list-item"><span data-slate-type="color" data-color="rgb(0, 0, 0)" style="color:rgb(0, 0, 0)">Adding Raw/Editable html capabilities. (</span><span data-slate-type="fontSize" data-size="0.75em" style="font-size:0.75em"><span data-slate-type="color" data-color="rgb(0, 0, 0)" style="color:rgb(0, 0, 0)"><em data-slate-type="italic"><strong data-slate-type="bold">For more info visit </strong></em></span></span><a data-slate-type="link" href="https://github.com/vigneshpillutla/react-slate-editor" target="_blank"><span data-slate-type="fontSize" data-size="0.75em" style="font-size:0.75em"><span data-slate-type="color" data-color="rgb(107, 36, 178)" style="color:rgb(107, 36, 178)"><em data-slate-type="italic"><strong data-slate-type="bold">https://github.com/vigneshpillutla/react-slate-editor</strong></em></span></span></a><span data-slate-type="color" data-color="rgb(0, 0, 0)" style="color:rgb(0, 0, 0)">) </span></li><li data-slate-type="list-item"><span data-slate-type="color" data-color="rgb(0, 0, 0)" style="color:rgb(0, 0, 0)">Drag &amp; Drop Image upload and resizable media.</span></li><li data-slate-type="list-item"><span data-slate-type="color" data-color="rgb(0, 0, 0)" style="color:rgb(0, 0, 0)">Katex</span></li><li data-slate-type="list-item"><span data-slate-type="color" data-color="rgb(0, 0, 0)" style="color:rgb(0, 0, 0)">Internal Blog Linking</span></li></ul><div data-slate-type="paragraph"><span data-slate-type="color" data-color="rgb(0, 0, 0)" style="color:rgb(0, 0, 0)"><em data-slate-type="italic">Happy Editing! :p</em></span></div></div>';
  const onEditorChange = (value) => {
    setSlateHtml(value);
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'nopna6e5');
    const res = await axios.post(
      'https://api.cloudinary.com/v1_1/dpdrqvomq/image/upload',
      formData
    );

    return res;
  };
  return (
    <div className="App">
      <Editor
        onData={onEditorChange}
        initialValue={shtml}
        uploadImage={uploadImage}
      />
    </div>
  );
}

export default App;
