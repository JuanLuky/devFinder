import { useState } from "react";
import { Search } from "./Search";
import SvgComponent from "./Header";

export function Content() {
  const [apiUsername, setApiUsername] = useState("");
  async function SearchUser(newUser) {
    if( newUser === '' ) {
      return alert('Preencha o campo abaixo')
    }
    const user = newUser;
    const res=await fetch(`http://wsrh.mateus/rh/api/rh-rest-funcionario-rubi/v1/funcionarios/${user}`);

    fetch(res, {
      headers: {
        "content-type": "application/json",
        "server": "istio-envoy ",
        "transfer-encoding": "chunked" ,
        "x-envoy-upstream-service-time": "434",
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
          <h1>CPF: {apiUsername.cpf}</h1>
        </div>
      )}
    </>
  );
}
