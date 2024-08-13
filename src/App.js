import Contact from "./containers/contact/Contact";
import Footer from "./containers/footer/Footer";
import Profile from "./containers/profile/Profile";
import Projects from "./containers/projects/Projects";
import Skills from "./containers/skills/Skills";

function App() {
  return (
    <div className="App">
  <Profile/>
  <Projects/>
  <Skills/>
  <Contact/>
  <Footer/>

    </div>
  );
}

export default App;
