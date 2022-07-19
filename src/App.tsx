import React from 'react';
import './App.css';
import SelectApp from './containers/SelectApp'

function App() {
  return (
    <div className="App">
      <h1>アプリダウンロードページ</h1>
        <SelectApp />
        <p className="sub_text">アイコンをタップしてダウンロードしてください</p>
    </div>
  );
}

export default App;
