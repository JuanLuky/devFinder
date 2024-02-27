import { useState } from "react";
import { Search } from "./Search";

export function Content() {
  const [apiUsername, setApiUsername] = useState("");
  function SearchUser(newUser) {
    if( newUser === '' ) {
      return alert('Preencha o campo abaixo')
    }
    const user = newUser;
    fetch(`http://wsrh.mateus/rh/api/rh-rest-funcionario-rubi/v1/funcionarios/${user}`, {
      method: 'GET',
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      }
      })
      .then((response) => {
        if (!response.ok) {
        throw new Error('Erro ao recuperar os dados da API');
        }
      return response.json();
     })
      .then((data) => setApiUsername(data))
      .catch((error) => {
      console.error('Erro ao recuperar dados da API:', error);
      })
    }
    
  return (
    <>
      <Search SearchUser={SearchUser} />
      
      {apiUsername === "" ? null : (
        <div className="card">
          <h1>name: {apiUsername.cpf}</h1>
        </div>
      )}
    </>
  );
}
