import React from "react";
import "./Header.css";
//pages
import Perfil from "./Perfil";
//routes
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//icons
import { GrFormDown } from "react-icons/gr";
import { BsPinterest } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { BsFillBellFill } from "react-icons/bs";
import { MdFace } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";

export default function Header() {
    return (
        <header>
            <ul className="Header-ul">
                <Link to='/nav'><BsPinterest id="logo-pinterest" /></Link>
                <li className="Header-li container-pagina-inicial">
                    <Link to='/nav' id="pagina-inicial">Página inicial</Link>
                </li>
                <li className="Header-li container-hoje">
                    <Link id="hoje" to='/hoje'>Hoje</Link>
                </li>
                <li className="Header-li container-criar">
                    <Link id="criar" to='/criar'>Criar</Link>
                </li>
                <div className="container-seta-baixo-preta">
                    <Link id="seta-baixo-preta" to='/criar'>
                        <GrFormDown />
                    </Link>
                </div>
                <div className="container-barra-busca">
                    <div className="barra-navegacao">
                        <FaSearch id="barra-busca" />
                        <form className="Header-form">
                            <input className="Header-input" type="text" placeholder="Pesquisar" />
                            <button className="Header-button" type="submit" ></button>
                        </form>
                    </div>
                </div>
                <li className="Header-li icones-cinzas">
                    <Link to='/notificacoes' id="sino" >
                        <BsFillBellFill />
                    </Link>
                </li>
                <li className="Header-li icones-cinzas">
                    <Link to='/mensagens' id="chat">
                        <BsFillChatDotsFill />
                    </Link>
                </li>
                <li className="Header-li icones-cinzas">
                    <Link to='/perfil' id="face">
                        <MdFace id="cara" />
                    </Link>
                </li>
                <li className="Header-li container-seta-baixo-cinza">
                    <Link to='/contas' id="seta-baixo-cinza">
                        <GrFormDown />
                    </Link>
                </li>
            </ul>
        </header>
    )
}
