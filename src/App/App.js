import './App.css';
import { Blog, Footer, Header, WhatGPT3, Possibility, Features } from '../Container';
import { CTA, Navbar, Brand } from '../Components';

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />

    </div>
  );
}

export default App;
