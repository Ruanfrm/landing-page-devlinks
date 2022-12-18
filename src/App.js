import {BsHandIndex} from "react-icons/bs"

function App() {
  return (
    <div className="container">

      {/* imagem de logo e botão */}
      <header className="App-header">
        <img src="/devlink-transparent.png"  alt="logo" />
        <a href="https://ruanfr.com">
        <button>Acessar 
          <BsHandIndex size={24} />
        </button>
        </a>
      </header>
      

      {/* imagem de celular */}
      <div className="phone">
        <a href="https://ruanfr.com">
        <img src="phone-devlink.png" alt="logo-devlink" className="efeito-flutuante-infinito"/>
      </a>
      </div>
    </div>
  );
}

export default App;
