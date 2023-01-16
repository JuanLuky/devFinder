import { InstagramLogo, MapPin } from "phosphor-react";
import { Search } from "./Search";

export function Content() {

  function SearchUser(newUser) {
    const user = newUser;
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <>
      <Search SearchUser={SearchUser}/>

      <div className="card">
        <img src="https://github.com/JuanLuky.png" alt="foto perfil" />

        <div className="card-content">
          <header>
            <div>
              <h1>Juaan Carlos</h1>
              <p>Develope</p>
            </div>
            <p>25 de jan 2021</p>
          </header>

          <p className="description"> Lorem ipsum dolor sit amet</p>

          <div className="follows-area">
            <div>
              <p>Repos</p>
              <h4>9</h4>
            </div>
            <div>
              <p>Followers</p>
              <h4>9987</h4>
            </div>
            <div>
              <p>Following</p>
              <h4>9</h4>
            </div>
          </div>

          <div className="locale-area">
            <div>
              <MapPin size={20} color="white" />
              <p>San Francisco</p>
            </div>
            <div>
              <InstagramLogo size={20} color="white" />
              <p>uJuan</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
