import logo from "./img/logo.png";
import "./App.css";
import bg from "./img/bg.png";
import worker1 from "./img/equipe/worker1.jpg";
import worker2 from "./img/equipe/worker2.jpg";
import worker3 from "./img/equipe/worker3.jpg";
import worker4 from "./img/equipe/worker4.jpg";
import worker5 from "./img/equipe/worker5.jpg";
import worker7 from "./img/equipe/worker7.jpg";
import worker8 from "./img/equipe/worker8.jpg";
import worker9 from "./img/equipe/worker9.jpg";
import worker10 from "./img/equipe/worker10.jpeg";
import worker11 from "./img/equipe/worker11.png";
import worker12 from "./img/equipe/worker12.jpg";
import worker13 from "./img/equipe/worker13.jpg";
import imd from "./img/imd-logo.png";
import pdf_projeto from "./projeto_pdf/projeto.pdf";
import ufrn from "./img/ufrn-logo.png";
import synchro from "./img/synchro-logo.png";
import NavBar from "./components/navbar";
import BottomBarClass from "./components/bottombar";
import ToTheTopBtn from "./components/tothetopbtn";
import Equipe from "./components/worker";

function App() {
  return (
    <div>
      <NavBar />
      <ToTheTopBtn />
    </div>
  );
}

function FrontFace() {
  return (
    <div className="col-12 front-face-div-react">
      <div className="col-12 main-text">
        <img className="logo" src={logo} />
      </div>
      <img className="col-12 img-front-face" src={bg} />

      <h6 className="scroll-text">scroll</h6>
      <div class="scroll-downs">
        <div class="mousey">
          <div class="scroller"></div>
        </div>
      </div>
    </div>
  );
}

function Projeto() {
  return (
    <div id="project" className="col-12 project-div">
      <div className="col-12 projeto-title">
        <h1 className="naoSelecionavel">PROJETO</h1>
      </div>
      <div className="col-12 projeto-content">
        <h3>Descrição resumida do Projeto</h3>
        <p>
          A natureza tipicamente monolítica de muitas aplicações baseadas em
          Computação em Nuvem limita importantes aspectos de qualidade como
          manutenibilidade, disponibilidade e escalabilidade. Para superar essas
          limitações e tendo em vista o crescimento do tamanho e complexidade
          dos sistemas contemporâneos, surgiram, nesse contexto, os chamados
          microsserviços, os quais podem ser definidos como serviços autônomos
          que possuem tamanho e complexidade reduzidos por oferecerem
          funcionalidades bastante específicas. O uso de microsserviços tem
          chamado a atenção tanto da academia quanto da indústria pela ampla
          gama de vantagens que esse tipo de estilo arquitetural pode trazer.
          Ademais, as arquiteturas baseadas em microsserviços são
          particularmente adequadas para infraestruturas de nuvem, pois se
          beneficiam muito da elasticidade proporcionada pela nuvem e do rápido
          provisionamento de recursos. A Synchro, uma das maiores provedoras de
          soluções fiscais no Brasil, temenvidado esforços na migração de suas
          aplicações para funcionar na Web, utilizando o paradigma de nuvem e
          microsserviços, visando principalmente obter ganhos no que diz
          respeito à escalabilidade e manutenibilidade das soluções. Todavia,
          adotar uma arquitetura orientada a microsserviços não garante de forma
          imediata o alcance dos objetivos prometidos por esse estilo
          arquitetural, considerando que há diversos desafios resultantes desse
          tipo de arquitetura a serem suplantados. Além disso, é necessário que
          seja provido um arcabouço para desenvolver tais sistemas baseados em
          microsserviços, o que possibilitará um melhor gerenciamento destes de
          forma a otimizar os recursos a serem usados, monitorá-los em tempo
          real, prover mecanismos de segurança e confiabilidade e manter alta
          qualidade de serviço. Nesse contexto, o objetivo deste projeto de
          fomento à inovação, mediante a realização de pesquisa aplicada, é
          projetar e implementar o SynchroArch, um framework arquitetural que
          sirva de base para a construção e migração de aplicações no domínio
          fiscal fazendo uso das recentes tecnologias voltadas para a
          especificação, desenvolvimento, implantação e operação de aplicações
          baseadas em Computação em Nuvem. De forma inovadora e utilizando
          técnicas disponíveis no estado da arte e estado da prática, o
          SynchroArch proverá componentes funcionais e levará em consideração
          requisitos de qualidade como escalabilidade e dependabilidade, bem
          como métricas que possibilitem um escalonamento automático da
          infraestrutura de suporte às aplicações. Com isso, o framework
          SynchroArch possibilitará o projeto e implantação de aplicações da
          Synchro utilizando tecnologias modernas e se constituirá como alicerce
          para modernização do portfólio de produtos da empresa nos próximos
          anos.
        </p>
        <div className="projeto-btn-div">
          <a href={pdf_projeto} download="projeto">
            <button className="projeto-btn">LER MAIS</button>
          </a>
        </div>
      </div>
    </div>
  );
}

function Parceiros() {
  return (
    <div className="parceiros-section">
      <div className="col-12 parceiros-title">
        <h1 className="naoSelecionavel">PARCEIROS</h1>
      </div>

      <div className="col-12 parceiros-content">
        <div className="parceiros-img-div">
          <a href="https://www.ufrn.br/" target="_blank">
            <img className="ufrn-logo" src={ufrn} />
          </a>
          <a href="https://www.imd.ufrn.br/portal/" target="_blank">
            {" "}
            <img className="imd-logo" src={imd} />
          </a>
          <a href="https://www.synchro.com.br/" target="_blank">
            <img className="synchro-logo" src={synchro} />
          </a>
        </div>
      </div>
    </div>
  );
}

function EquipeTabs() {
  return (
    <div id="equipe" className="col-12 equipe-section">
      <div className="col-12 equipe-title">
        <h1 className="naoSelecionavel">EQUIPE</h1>
      </div>
      <div className="worker-all-tabs">
      <Equipe
          workerImg={worker3}
          name={"Everton"}
          atuacao={"Coordenador do Projeto"}
          link3={"http://dimap.ufrn.br/~everton/"}
        />
        <Equipe
          workerImg={worker1}
          name={"Aluízio"}
          atuacao={"Vice Coordenador do Projeto"}
          link1={"https://www.linkedin.com/in/aluizio-rocha-neto/"}
          link2={"https://github.com/aluiziorocha"}
          link3={"http://www.docente.ufrn.br/aluizio.rocha"}
        />
        <Equipe
          workerImg={worker2}
          name={"Thaís"}
          atuacao={"Pesquisadora do Projeto"}
          link1={"https://www.linkedin.com/in/thais-batista-58b9b94a/"}
          link2={"https://orcid.org/0000-0003-3558-1450"}
          link3={"http://lattes.cnpq.br/5521922960404236"}
        />
        <Equipe
          workerImg={worker4}
          name={"César"}
          atuacao={"Pesquisador do Projeto"}
          link1={"https://www.linkedin.com/in/cesar-perdigao-batista/"}
          link3={"http://lattes.cnpq.br/3047076705373871"}
        />
        <Equipe
          workerImg={worker5}
          name={"Juliana"}
          atuacao={"Pesquisadora do Projeto"}
          link1={"https://www.linkedin.com/in/oliveirajuliana"}
          link2={"https://github.com/judf/"}
          link3={"http://lattes.cnpq.br/5599540449626040"}
        />
        <Equipe
          workerImg={worker7}
          name={"Pedro"}
          atuacao={"Pesquisador do Projeto"}
          link1={"https://www.linkedin.com/in/pedrovb/"}
          link2={"https://github.com/PedroVictorB"}
          link3={"http://lattes.cnpq.br/7825442850615162"}
        />
        <Equipe
          workerImg={worker8}
          name={"Felipe"}
          atuacao={"Full Stack Developer"}
          link1={
            "https://www.linkedin.com/in/felipe-morais-da-silva-9856b1192/"
          }
          link2={"https://github.com/jeowf"}
          link3={"http://lattes.cnpq.br/7243232425776112"}
        />
        <Equipe
          workerImg={worker9}
          name={"Henrique"}
          atuacao={"Full Stack Developer"}
          link1={"https://www.linkedin.com/in/henriquedavid/"}
          link2={"https://github.com/henriquedavid/"}
          link3={"http://lattes.cnpq.br/5136480770028616"}
        />
        <Equipe
          workerImg={worker10}
          name={"Hyago"}
          atuacao={"Full Stack Developer"}
          link1={"https://www.linkedin.com/in/hyago-oliveira-147b72193"}
          link2={"https://github.com/hyag1"}
          link3={"http://lattes.cnpq.br/4080423203464235"}
        />
        <Equipe
          workerImg={worker11}
          name={"Jonas"}
          atuacao={"Full Stack Developer"}
          link1={"https://www.linkedin.com/in/jonas-de-oliveira/"}
          link2={"https://github.com/usrjonas"}
          link3={"http://lattes.cnpq.br/1069327174549709"}
        />
        <Equipe
          workerImg={worker12}
          name={"José"}
          atuacao={"Full Stack Developer"}
          link2={"https://github.com/josevitoor"}
          link3={
            "https://drive.google.com/file/d/1d8fqgeloOQ6lxlYXM4-S2G7IZvDfe9We/edit"
          }
        />
        <Equipe
          workerImg={worker13}
          name={"Vinícius"}
          atuacao={"Full Stack Developer"}
          link1={
            "https://www.linkedin.com/in/vinícius-ribeiro-bulcão-b71438180/"
          }
          link2={"https://github.com/Bulcs"}
          link3={"https://bulcs.github.io"}
        />
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div id="contact" className="contact-main-div">
      <div className="col-12 contact-title">
        <h1 className="naoSelecionavel">ENTRE EM CONTATO</h1>
      </div>
      <div className="contact-logo-form">
        <div className="col-6 logo-contact">
          <h2 className="naoSelecionavel">SynchroArch</h2>
        </div>
        <div className="col-6 form">
          <form method="post">
            <div className="form-input-bg">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nome"
                required=""
              />
            </div>
            <div className="form-input-bg">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required=""
              />
            </div>
            <div className="form-message-bg">
              <textarea
                rows="4"
                cols="41"
                name="message"
                placeholder="Mensagem"
              ></textarea>
            </div>
            <div className="form-button-div">
              <input
                id="submit-button"
                type="submit"
                name="submit"
                value="ENVIAR"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function BottomBar() {
  return <BottomBarClass />;
}

export { App, FrontFace, EquipeTabs, Projeto, Parceiros, BottomBar, Contact };
