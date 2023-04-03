import React, { useEffect, useState } from 'react';
import axios from "axios";
import { cepProps } from './types';
import  Cep  from './services/cep'


function App() {
  const [cep, setCep] = useState(''); 
  const url = `https://viacep.com.br/ws/${cep}/json`  
  const [response,setResponse] = useState({} as cepProps);


  async function obter(){
    setResponse(await Cep.get(cep))
    
    // axios.get(url)
    // .then(({data}) => {
    //   setResponse(data)
    // })
  }

  return (
    <div>
      <div>
        <label htmlFor="">CEP</label>
        <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} />
        <button onClick={() => obter()}>Enviar</button>
      </div>
      <div>
        Bairro: {response.bairro} <br />
        Cidade: {response.localidade}

      </div>
    </div>
  );
}

export default App;
