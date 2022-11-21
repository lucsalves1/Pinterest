import { FiChevronDown } from 'react-icons/fi'
import { AiFillLike } from 'react-icons/ai'
import './Feed.css'
import Header from './Header'


function Post() {
    return (
        <div>
            <Header />
            <div className='feed'>
                <div className='imgCentral'>
                    <img src='https://i.pinimg.com/236x/a4/81/de/a481decbc9736c44cb17e5aa1795e6ac.jpg' alt=''></img>
                </div>
                <div className='infos'>
                    <div className='superior'>
                        <ul className='icones' >
                            <li><img src='https://cdn-icons-png.flaticon.com/512/512/512142.png' alt=''></img></li>
                            <li><img src='https://cdn-icons-png.flaticon.com/512/725/725008.png' alt=''></img></li>
                            <li><img src='https://cdn-icons-png.flaticon.com/512/1011/1011407.png' alt=''></img></li>
                        </ul>
                        <button>Salvar</button>
                    </div>

                    <h1 className='titulo'>Corvinal</h1>
                    <p className='descricao'>Corvinal (do inglês "Ravenclaw") é uma das quatro Casas da Escola de Magia e Bruxaria Hogwarts, fundada por Rowena Ravenclaw. Membros dessa casa são caracterizados por sua perspicácia…</p>
                    <div className='perfil'>
                        <img className='fotoredondap' src='https://lh3.googleusercontent.com/a-/ACNPEu_SpIQVyt7oEYiC0FNP7zG_gwY56fOc1nK-X1yu=s32-c' alt='' ></img>
                        <p className='publicador'> Arthur Gabriel </p>
                        <p className='seguidoresplus'>50 seguidores</p>
                        <button className='seguir'>Seguir</button>
                    </div>
                    <p className='comentarios'>Comentários<FiChevronDown /></p>
                    <div className='comentario01'>
                        <img className='fotoredonda1' src='https://lh3.googleusercontent.com/a-/ACNPEu8MF6Bz9VvoGPu0-5WcpB6DgCddRczesy6Utu0c=s32-c' alt='' ></img>
                        <p className='usuario1'>Alice Cavalcanti</p>
                        <p className='comentario1'>Prefiro grifinória!</p>
                        <p className='tempocoment1'>3 mo</p>
                        <p className='responder1'> Responder </p>
                        <img className='favsimg1' src='https://cdn.discordapp.com/attachments/1000252860283506788/1030310720363049030/001-heart.png' alt=''></img><p className='favs1'>4</p>
                        <img className='icone1' src='https://cdn.discordapp.com/attachments/1000252860283506788/1030314500747952178/dots.png' alt=''></img>
                        <p className='like1'><AiFillLike /> Útil</p>
                    </div>
                    <div className='comentario02'>
                        <img className='fotoredonda2' src='https://lh3.googleusercontent.com/a-/ACNPEu-4-TZ-FtTRLMV087OdbiJ9XQGKdLYG1yogEd8eZQ=s32-c' alt='' ></img>
                        <p className='usuario2'>Liana Vitória</p>
                        <p className='comentario2'>Ei, tu é né?</p>
                        <p className='tempocoment2'>2 mo</p>
                        <p className='responder2'> Responder </p>
                        <img className='favsimg2' src='https://cdn.discordapp.com/attachments/1000252860283506788/1030310720363049030/001-heart.png' alt=''></img><p className='favs2'>5</p>
                        <img className='icone2' src='https://cdn.discordapp.com/attachments/1000252860283506788/1030314500747952178/dots.png' alt=''></img>
                        <p className='like2'><AiFillLike />Útil</p>
                    </div>
                    <button className='vermais'>Ver mais</button>
                    <div>
                        <img className='fotoredonda3' src='https://i.pinimg.com/280x280_RS/b1/e2/be/b1e2be92a0f7cd28d156b9bb4f9fd03f.jpg' alt=''></img>
                        <input className='comentar' type="text" placeholder="   Adicionar comentário                                      &#128515;"></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;