import {BsHandIndex} from "react-icons/bs"
import {FaWhatsapp, FaLinkedin, FaGithub, FaInstagram    } from "react-icons/fa"

function App() {
  return ( <div>
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
    <div className="container-footer">
         <footer>
          <a href="https://github.com/Ruanfrm" ><FaGithub size={28} color="#000"/></a>
          <a href="https://instagram.com/ruan.fr" > <FaInstagram size={28} color="#000"/></a>
          <a href="https://www.linkedin.com/in/ruan-freire-213721202/" ><FaLinkedin size={28} color="#000"/></a>
          <a href="https://api.whatsapp.com/send?phone=5588981558151&text=Ol%C3%A1%2C%20vim%20pelo%20devlinks." > <FaWhatsapp size={28} color="#000"/></a>
      </footer>
      </div>
</div>
  );
}

export default App;
