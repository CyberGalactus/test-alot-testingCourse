import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import RamenVote from './component/RamenVote';
import Section from './component/Section';
import Contact from './component/Contact';

function App() {
  return (
    <div className="App">
      <Header title="welcome to my website!" />
      <RamenVote />
      <Section />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
