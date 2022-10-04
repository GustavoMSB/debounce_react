import { useState } from 'react'
import { InputSearch } from './components/InputSearch';

function App() {
  const [searchParam, setSearchParam] = useState('');

  return (
    <div>
      <h1>Hello World</h1>
      <InputSearch value={searchParam} onChange={setSearchParam} onClick={setSearchParam}/>
      <p>Você está pesquisando por: {searchParam}</p>
    </div>
  )
}

export default App
