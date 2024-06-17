import { useState } from 'react';
import './styles/all.css';
import './styles/animate.min.css';
import './styles/bootstrap.min.css';
import './styles/font-awesome.min.css';
import './styles/login.css';
import './styles/rawline.css';

import Logo from './assets/pic_logo_inst.png';
import Unimestre from './assets/unimestre.png';
import Gmail from './assets/gmail.png';

import axios from 'axios';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async() => {
    if(email !== "" && password !== "") {
      const response = await axios.post("https://onesourceteam.dev/inspira/login", { email, password})
      console.log(response)
      if (response.data.success) {
        setCurrentPage(3)
      } 
    }
  };

  return (
    <>
      <div className="cls-container" id="container">
        <div className="bg-img bg-img-login"></div>
        {currentPage === 0 ? 
          <>
            <div id="div_container_login">
              <div className="cls-conteudo">
                <div className="cls-conteudo-sm panel">
                  <div className="panel-body">
                    <div className="img-cliente text-center">
                      <img src={Logo} alt="Logo" />
                    </div>
                    <div id="div-erro" className="row" style={{ display: 'none' }}>
                      <div className="alert alert-danger"></div>
                    </div>
                    <div>
                      <div className="form-group">
                        <div className="input-group">
                          <div className="input-group-addon"><i className="fa fa-user"></i></div>
                          <input
                            type="text"
                            name="codigo"
                            id="formEmail"
                            value={email}
                            className="form-control"
                            placeholder="E-mail"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="input-group">
                          <div className="input-group-addon"><i className="fa fa-asterisk"></i></div>
                          <input
                            type="password"
                            name="senha"
                            id="formPassword"
                            value={password}
                            className="form-control"
                            placeholder="Senha"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xs-8 text-left esqueceu-senha">
                          <p><img src={Gmail} style={{height: '0.7vw'}}/>Login com conta Google</p>
                          <a href="#" className="cor-texto-padrao" onClick={() => setCurrentPage(1)}>Esqueceu sua senha?</a>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xs-12">
                          <div className="form-group text-right">
                            <button className="btn btn-primary text-uppercase cor-backgroud-padrao" id="btn-entrar" style={{ width: '4vw' }} onClick={handleSubmit}>Entrar</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <img src={Unimestre} alt="" width="120" /><br />
                  </div>
                  <div className="versao text-right">
                    2.24.5.7819
                  </div>
                </div>
              </div>
            </div>
          </>
        : "" }
        {currentPage === 1 ? 
          <div id="div_container_recuperar_senha" className="animated bounceInRight">
            <div className="cls-conteudo">
              <div className="cls-conteudo-sm-recupera panel">
                <div className="panel-body">
                  <div className="img-cliente text-center">
                    <img src={Logo} alt="Logo" />
                  </div>
                  <div className="well well-lg text-justify">
                    <br />
                    <table width="90%" className="dados" align="center">
                      <tbody>
                        <tr>
                          <td valign="top" align="left">
                            Atenção: Este formulário deve ser usado para criar uma nova senha de acesso aos serviços do AMAIS (Portal Unimestre/Agenda+).<br /><br />
                            Após preencher os dados abaixo e enviar, você receberá no seu e-mail um link para alterar ou definir a nova senha. Essa será sua senha para os serviços do AMAIS. <br />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-sm-6 col-sm-offset-3">
                    <form name="form_recuperar_senha" id="form_recuperar_senha" action="#" method="post">
                      <div className="form-group">
                        <label htmlFor="ds_email">e-Mail</label>
                        <input className="form-control" type="text" id="ds_email" size={50} maxLength={50} />
                      </div>
                      <div className="form-group" id="div_pessoa_nao_encontrada" style={{ display: 'none', color: 'red' }}>
                        <br />
                        <table className="dados" width="90%" align="center">
                          <tbody>
                            <tr>
                              <td valign="top" align="left">
                                Os dados digitados não foram encontrados em nosso sistema! <br />
                                Preencha todos os dados completamente.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="form-group" id="div_email_repetido" style={{ display: 'none', color: 'red' }}>
                        O endereço de email informado está sendo usado por mais de uma pessoa.
                        Não será possível enviar o email para resetar a senha.
                        Contate a sua instituição de ensino.
                      </div>
                      <div className="form-group">
                        <div className="text-center">
                          <button type="button" id="btn_recuperar_senha" name="salvar" className="btn btn-sm btn-primary" onClick={() => setCurrentPage(2)}>
                            <span className="glyphicon glyphicon-send"></span> Enviar
                          </button>
                        </div>
                      </div>
                      <input type="hidden" name="enviar_email" value="T" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        : "" }
        {currentPage === 2 ? 
          <div id="div_container_erro_recuperar" className="animated shake">
            <div className="cls-conteudo" style={{ paddingTop: '150px' }}>
              <div className="cls-conteudo-sm panel">
                <div className="panel-body text-center">
                  <div>
                    <div className="row">
                      <div className="col-sm-12">
                        <i className="fas fa-exclamation-triangle" style={{ fontSize: '63px', color: 'orange', padding: '20px' }}></i>
                        <br /><br />
                        Foram encontrados impedimentos para seu acesso,
                        contate a sua instituição de ensino.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        : "" }
        {currentPage === 3 ?
          <div id="div_container_formpage" className="animated bounceInRight">
            <div className="cls-conteudo">
              <div className="cls-conteudo-sm-form panel">
                <div className="panel-body">
                  <div className="img-cliente text-center">
                    <img src={Logo} alt="Logo" />
                  </div>
                  <div className="form-inputs">
                    <label>
                      1. Selecione o colégio em que você atua.
                      <select className="selector">
                        <option>Colegio Anchieta</option>
                        <option>Colegio São Paulo</option>
                        <option>Colégio Candido Portinari</option>
                        <option>Colégio 7 de Setembro</option>
                        <option>Colégio Candido Portinari</option>
                        <option>Colégio Contemporâneo</option>
                        <option>Colégio 1º Mundo</option>
                        <option>Colégio Physics</option>
                        <option>Colégio Over</option>
                      </select>
                    </label>
                    <label>
                      2. Como você avalia a qualidade das instalações <br/>físicas da escola?
                      <select className="selector">
                        <option>Excelente</option>
                        <option>Boa</option>
                        <option>Regular</option>
                        <option>Ruim</option>
                        <option>Péssima</option>
                      </select>
                    </label>
                    <label>
                      3. As condições de limpeza e manutenção são satisfatórias?
                      <select className="selector">
                        <option>Sempre</option>
                        <option>Na maioria das vezes</option>
                        <option>Às vezes</option>
                        <option>Raramente</option>
                        <option>Nunca</option>
                      </select>
                    </label>
                    <label>
                      4. Os materiais didáticos fornecidos são adequados <br/>para as aulas?                      
                      <select className="selector">
                        <option>Totalmente adequados</option>
                        <option>Adequados</option>
                        <option>Parcialmente adequados</option>
                        <option>Inadequados</option>
                        <option>Totalmente inadequados</option>
                      </select>
                    </label>
                    <label>
                      5. Você tem acesso a recursos tecnológicos necessários <br/>para o ensino?     
                      <select className="selector">
                        <option>Sempre</option>
                        <option>Na maioria das vezes</option>
                        <option>Às vezes</option>
                        <option>Raramente</option>
                        <option>Nunca</option>
                      </select>
                    </label>
                    <label>
                      6. Como você avalia a comunicação da equipe de gestão?
                      <select className="selector">
                        <option>Excelente</option>
                        <option>Boa</option>
                        <option>Regular</option>
                        <option>Ruim</option>
                        <option>Péssima</option>
                      </select>
                    </label>
                    <label>
                      7. Você sente que recebe apoio suficiente da <br/>coordenação e direção?
                      <select className="selector">
                        <option>Sempre</option>
                        <option>Na maioria das vezes</option>
                        <option>Às vezes</option>
                        <option>Raramente</option>
                        <option>Nunca</option>
                      </select>
                    </label>
                    <label>
                      8. As oportunidades de capacitação oferecidas pela <br/>Rede Inspira são satisfatórias?
                      <select className="selector">
                        <option>Muito satisfatórias</option>
                        <option>Satisfatórias</option>
                        <option>Neutras</option>
                        <option>Insatisfatórias</option>
                        <option>Muito insatisfatórias</option>
                      </select>
                    </label>
                    <label>
                      9. Você recebe feedback regular sobre seu desempenho?
                      <select className="selector">
                        <option>Sempre</option>
                        <option>Na maioria das vezes</option>
                        <option>Às vezes</option>
                        <option>Raramente</option>
                        <option>Nunca</option>
                      </select>
                    </label>
                    <label>
                      10. Como você avalia o equilíbrio entre sua vida <br/>profissional e pessoal?
                      <select className="selector">
                        <option>Excelente</option>
                        <option>Boa</option>
                        <option>Regular</option>
                        <option>Ruim</option>
                        <option>Péssima</option>
                      </select>
                    </label>
                    <label>
                      11. O volume de trabalho administrativo é gerenciável?
                      <select className="selector">
                        <option>Sempre</option>
                        <option>Na maioria das vezes</option>
                        <option>Às vezes</option>
                        <option>Raramente</option>
                        <option>Nunca</option>
                      </select>
                    </label>
                    <label>
                      12. Como você descreve a relação com seus <br/>colegas de trabalho?
                      <select className="selector">
                        <option>Excelente</option>
                        <option>Boa</option>
                        <option>Regular</option>
                        <option>Ruim</option>
                        <option>Péssima</option>
                      </select>
                    </label>
                    <label>
                      13. O ambiente de trabalho é colaborativo?
                      <select className="selector">
                      <option>Sempre</option>
                        <option>Na maioria das vezes</option>
                        <option>Às vezes</option>
                        <option>Raramente</option>
                        <option>Nunca</option>
                      </select>
                    </label>
                    <label>
                      14. Como você avalia sua satisfação geral com o <br/>trabalho na Rede Inspira?
                      <select className="selector">
                        <option>Muito satisfeito(a)</option>
                        <option>Satisfeito(a)</option>
                        <option>Neutro(a)</option>
                        <option>Insatisfeito(a)</option>
                        <option>Muito insatisfeito(a)</option>
                      </select>
                    </label>
                    <label>
                      15. Você recomendaria a Rede Inspira como um bom <br/>lugar para trabalhar?
                      <select className="selector">
                        <option>Definitivamente sim</option>
                        <option>Provavelmente sim</option>
                        <option>Talvez</option>
                        <option>Provavelmente não</option>
                        <option>Definitivamente não</option>
                      </select>
                    </label>

                    <label>
                      16. Quais melhorias você sugere para tornar a escola um <br/>local de trabalho melhor para os professores?
                      <input className="input" />
                    </label>
                  </div>
                  <div className="col-sm-6 col-sm-offset-3">
                    <div className="form-group">
                      <div className="text-center">
                        <button type="button" id="btn_recuperar_senha" name="salvar" className="btn btn-sm btn-primary" style={{marginTop: '2vw'}} onClick={() => setCurrentPage(4)}>
                          <span className="glyphicon glyphicon-send"></span> Enviar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        : "" }
        {currentPage === 4 ? 
          <div id="div_container_sucesso_form" className="animated bounceInRight">
            <div className="cls-conteudo" style={{ paddingTop: '150px' }}>
              <div className="cls-conteudo-sm panel">
                <div className="panel-body text-center">
                  <div>
                    <div className="row">
                      <div className="col-sm-12">
                        <i className="fas fa-check" style={{ fontSize: '63px', color: 'green', padding: '20px' }}></i>
                        <br /><br />
                        Sua pesquisa foi concluida e enviada com sucesso!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        : "" }
      </div>
    </>
  );
}

export default App;
