import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <main className="l-main">
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="../assets/css/styles.css" />
        <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet' />
        <title>Yoseph's Portfolio website</title>
        <script src="https://unpkg.com/scrollreveal"></script>
        <script src="assets/js/main.js"></script>
    <div className="App">
     <Header />
     <Home />
     <About />
     <Skills />
     <Works />
     <Contact />
     <Footer />
    </div>
  </main>
  );
}

export default App;
