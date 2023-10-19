import ProjectList from "../../components/ProjectList/ProjectList";
import { data } from "../../data";
import "./PortfolioPage.scss";

const PortfolioPage = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="visually-hidden">Developments</h1>
          <ul className="filter">
            <li className="filter__item">
              <button className="filter__button" type="button">
                All
              </button>
            </li>
            <li className="filter__item">
              <button className="filter__button" type="button">
                Websites
              </button>
            </li>
            <li className="filter__item">
              <button className="filter__button" type="button">
                Apps
              </button>
            </li>
            <li className="filter__item">
              <button className="filter__button" type="button">
                Designs
              </button>
            </li>
            <li className="filter__item">
              <button className="filter__button" type="button">
                Marketing
              </button>
            </li>
          </ul>
        </div>
        <div className="container">
          <ProjectList data={data} />
        </div>
      </section>
    </>
  );
};
export default PortfolioPage;
