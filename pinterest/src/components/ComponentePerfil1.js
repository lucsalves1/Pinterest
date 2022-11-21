import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './Perfil.css'
import Header from './Header'
function PerfilUm() {

    return (
        <div>
            <body>
                <Header />
                <div className="corpo">
                    <div>
                        <img className='Perfil_logo' src='https://i.pinimg.com/280x280_RS/b1/e2/be/b1e2be92a0f7cd28d156b9bb4f9fd03f.jpg' alt=''></img>
                        <h1>Lucas Alves dos Santos</h1>
                        <p className="email">@lucs.alves2012</p>
                        <p className="seguidores">50 seguindo</p>
                        <div />
                        <div className="bt">

                            <button className='botão1' >Compatilhar</button>

                            <button className='botão1' >Editar perfil</button>
                        </div>
                        <div className="Rotas">

                            <li>
                                <button className="botão2"> <Link className="LinkRotaTexto1" to='/ComponentePerfil1'>Criados</Link> </button>
                            </li>
                            <li>
                                <button className="botão2"> <Link className="LinkRotaTexto2" to='/ComponentePerfil2'>Salvos</Link></button>
                            </li>

                        </div>
                        <div className="RotasMostrar">

                        </div>
                        <h1 className="TextoRotaCriados">Inspire outras pessoas com uma Idea Pin</h1>
                        <button className="BotãoRotaCriados">Criar</button>
                    </div>
                </div>
            </body>

        </div>
    )
}

export default PerfilUm