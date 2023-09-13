import ProjectList from "../../components/ProjectList/ProjectList";
import { data } from "../../data";
import "./PortfolioPage.scss";

const PortfolioPage = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="visually-hidden">Разработки</h1>
          <ul className="filter">
            <li className="filter__item">
              <button className="filter__button" type="button">
                Все
              </button>
            </li>
            <li className="filter__item">
              <button className="filter__button" type="button">
                Веб-сайты
              </button>
            </li>
            <li className="filter__item">
              <button className="filter__button" type="button">
                Приложения
              </button>
            </li>
            <li className="filter__item">
              <button className="filter__button" type="button">
                Дизайн
              </button>
            </li>
            <li className="filter__item">
              <button className="filter__button" type="button">
                Маркетинг
              </button>
            </li>
          </ul>
        </div>
        <ProjectList data={data} />
      </section>
    </>
  );
};
export default PortfolioPage;
