import { Buildings, MapPin } from "phosphor-react";
import { useState } from "react";
import { Search } from "./Search";

export function Content() {
  const [apiUsername, setApiUsername] = useState("");

  function SearchUser(newUser) {
    if( newUser === '' ) {
      return alert('Preencha o campo abaixo')
    }
    const user = newUser;
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((data) => setApiUsername(data));
  }

  return (
    <>
      <Search SearchUser={SearchUser} />
      
      {apiUsername === "" ? null : (
        <div className="card">
          <img src={apiUsername.avatar_url} alt="foto perfil" />

          <div className="card-content">
            <header>
              <div>
                <h1>{apiUsername.name}</h1>
                <p>{apiUsername.login}</p>
              </div>
              <p>{apiUsername.updated_at}</p>
            </header>

            <p className="description">{apiUsername.bio}</p>

            <div className="follows-area">
              <div>
                <p>Repos</p>
                <h4>{apiUsername.public_repos}</h4>
              </div>
              <div>
                <p>Followers</p>
                <h4>{apiUsername.followers}</h4>
              </div>
              <div>
                <p>Following</p>
                <h4>{apiUsername.following}</h4>
              </div>
            </div>

            <div className="locale-area">
              <div>
                <MapPin size={20} color="white" />
                <p>{apiUsername.location}</p>
              </div>
              <div>
                <Buildings size={20} color="white" />
                <p>{apiUsername.company}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
