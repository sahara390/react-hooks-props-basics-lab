import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

import { username, city, image, bio, github, linkedin } from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      <Home username={username} city={city} />
      <About bio={bio} image={image} github={github} linkedin={linkedin} />
    </div>
  );
}

export default App;
