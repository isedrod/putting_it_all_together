import React from 'react';
import './App.css';
import MyNewComponent from './components/MyNewComponent';
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <MyNewComponent/>
      <Counter title="Number of bugs in my code"/>
      <Counter title="Hours talked to rubber ducky" start={5} step={2}/>
      <Counter title="Hours talked to rubber ducky" start={150} step={25}/>
      <Counter title="Hours talked to rubber ducky" start={15055949} step={-252}/>
    </div>
  );
}

export default App;
