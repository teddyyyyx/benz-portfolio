
import { Navbar } from "./components/Navbar/Navbar";
import { Intro } from "./components/Intro/Intro";
import { Skills } from "./components/Skills/Skills";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";
import './App.css'
function App(){
    return(
        <div className="App">   
            <Navbar /> 
            <Intro />
            <Projects />
            <Skills />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}

export default App;
