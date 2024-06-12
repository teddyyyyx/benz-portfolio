
import { Navbar } from "./components/Navbar/Navbar";
import { Intro } from "./components/Intro/Intro";
import { Skills } from "./components/Skills/Skills";
import { Works } from "./components/Works/Works";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";

function App(){
    return(
        <div className="App">   
            <Navbar /> 
            <Intro />
            <Projects />
            <About />
            <Skills />
            {/* <Works />  */}
            <Contact />
            <Footer />
        </div>
    )
}

export default App;