import './Login.css'
import { FaPinterest } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

function Login() {


    return (
            <div className="fundo">
                <div className="fundo-tela">
                    <div className="fundo-login">
                        <div className="Elementos">
                            <FaPinterest className='icon' />

                            <p className='Titulo' >Bem Vindo (a) ao Pinterest </p>

                            <p className="titulo-input">Email</p>


                            <input type="email" placeholder="   Digite seu email" className="input-entrada-e"></input>


                            <p className="titulo-input">Senha</p>


                            <input type="password" placeholder="   Digite sua senha" className="input-entrada"></input>


                            <p className="titulo-input"><strong>Esqueceu sua senha?</strong></p>

                            <Link to='/nav'>
                                <button type="submit" className="botao-entrar "><strong> Entrar  </strong> </button>
                            </Link>


                            <p className="fim-textoo"><strong>OU</strong></p>

                            <div><FaFacebook className='icon-face' /></div>


                            <a href="https://pt-br.facebook.com/" ><button type="submit" className="botao-face">   <strong>   Continuar com o Facebook  </strong> </button></a>


                            <div>< FcGoogle className='icon-google' /> </div>

                            <a href="https://www.google.com.br/" ><button type="submit" className="botao-google" >  Continuar com o Google</button></a>


                            <p className="fim-texto">

                                Ao continuar, você concorda com <br></br> os<strong> termos de Serviços</strong> do
                                Pinterest<br></br> e confirma que leu a nossa<br></br><stron> Política de Privacidade.</stron><br></br><br></br>
                                <strong> Ainda não está no Pinterest? Crie uma conta.</strong><br></br><br></br>
                                <strong> Você é uma empresa? Comece aqui!</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>



    );
}
export default Login;