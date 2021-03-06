import logo from './logo.svg';
import Put from './components/Put/put.js';
import Get from './components/Get/get.js';
import Delete from './components/Delete/delete.js';
import TitleSearch from './components/TitleSearch/titlesearch.js'


function App() {
  return (
    <div className="App">
      <h1>Put Component</h1>
      <Put/>
      <h1>Get Component</h1>
      <Get/>
      <h1>Delete Component</h1>
      <Delete/>
      <h1>Extra Get Component</h1>
      <TitleSearch/>
    </div>
  );
}

export default App;
