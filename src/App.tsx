import React from 'react';
import './App.css';
import SelectApp from './containers/SelectApp'

function App() {
  return (
    <div className="App">
      <h1>アプリダウンロードページ</h1>
        <SelectApp />
        <div>
            <a href="">aaaa</a>
            <p className="sub_text">アイコンをタップしてダウンロードしてください</p>
        </div>
    </div>
  );
}

export default App;
