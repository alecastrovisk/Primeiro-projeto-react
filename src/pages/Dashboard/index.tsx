import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import Logo from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={Logo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite aqui o repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/42475360?s=460&u=9437a673cc24dfd15f1ba6fb589f9eaff164bfef&v=4"
            alt="Alexandre Castro"
          />

          <div>
            <strong>rocketseat/React</strong>
            <p>Aprendendo React com a rocket </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://scontent.fmcz3-1.fna.fbcdn.net/v/t1.0-9/108669578_2640639202860620_4206996946529179726_o.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_ohc=HUl-BYzf1eQAX-OcNu5&_nc_ht=scontent.fmcz3-1.fna&oh=f20a9012fbada1847a1d17b95c42e36e&oe=5FE1C9D6"
            alt="Alexandre Castro"
          />

          <div>
            <strong>João Netto</strong>
            <p>Peidero profissional </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/42475360?s=460&u=9437a673cc24dfd15f1ba6fb589f9eaff164bfef&v=4"
            alt="Alexandre Castro"
          />

          <div>
            <strong>TESTE</strong>
            <p>Aprendendo React com a rocket </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};
export default Dashboard;
