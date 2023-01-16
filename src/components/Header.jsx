import { Sun } from "phosphor-react";
import { Content } from "./Content";

export function Header() {
  return (
    <>
      <header className="header">
        <h1>devFinder </h1>
        <div>
          <p>Light</p>
          <Sun />
        </div>
      </header>

      <Content />
    </>
  );
}
