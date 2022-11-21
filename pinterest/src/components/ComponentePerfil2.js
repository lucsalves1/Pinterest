import { CgMathPlus } from 'react-icons/cg'
import { RiEqualizerLine } from 'react-icons/ri'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './Perfil.css'
import Header from './Header'
function Perfildois() {
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
                        <div className="ContainerIconMaisSalvos">
                            <CgMathPlus />
                        </div>
                        <div className='ContainerIconEqualizerSalvos'>
                            <RiEqualizerLine />
                        </div>
                        <img src="https://i.pinimg.com/236x/8b/52/1f/8b521f08ede6d0377f605b351d349716.jpg" className="Img1"></img>
                        <img src="https://i.pinimg.com/236x/3e/9d/85/3e9d85058538ad1ac458491e3fc3214a.jpg"
                            className="Img2" />
                        <img src="https://i.pinimg.com/236x/6c/6f/25/6c6f2562876bc6d386086880b347d79d.jpg"
                            className="Img3" />
                    </div>


                </div>

            </body>

        </div>
    )
}

export default Perfildois