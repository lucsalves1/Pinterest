import './Perfil.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { BsQuestionLg } from 'react-icons/bs'
import Header from './Header'

function Perfil() {
    return (
        <body>
            <Header/>
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
                </div>


            </div>

        </body>
    )
}

export default Perfil