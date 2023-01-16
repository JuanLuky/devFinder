import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";

export function Search({SearchUser}) {
  const [newUser, setNewUser] = useState("");

  return (
    <>
      <div className="searchInput">
        <MagnifyingGlass size={32} color="#0479FB" />
        <input
          type="text"
          placeholder="Search GitHub username..."
          onChange={(e) => setNewUser(e.target.value)}
          value={newUser}
        />
        <button type="submit" onClick={() => SearchUser(newUser)}>
          Search
        </button>

      </div>
    </>
  );
}
