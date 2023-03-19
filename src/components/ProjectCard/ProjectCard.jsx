const ProjectCard = (id, src, about, title, type) => {
  return (
    <li className="projects__item" key={id}>
      <a className="projects__link" href="/">
        <div className="projects__thumb">
          <picture>
            <source
              srcSet="
                    ./images/portfolio/mob-img1.jpg    1x,
                    ./images/portfolio/mob-img1@2x.jpg 2x"
              media="(max-width: 767px)"
            />
            <source
              srcSet="
                                    ./images/portfolio/tablet-img1.jpg    1x,
                                    ./images/portfolio/tablet-img1@2x.jpg 2x"
              media="(max-width: 1199px)"
            />
            <source
              srcSet="
                                    ./images/portfolio/desktop-img1.jpg    1x,
                                    ./images/portfolio/desktop-img1@2x.jpg 2x"
              media="(min-width: 1200px)"
            />

            <img src={src} alt="Фото " width="370" />
          </picture>

          <p className="projects__about">{about}</p>
        </div>
        <div className="projects__descr">
          <h2 className="projects__title">{title}</h2>
          <p className="projects__type">{type}</p>
        </div>
      </a>
    </li>
  );
};

export default ProjectCard;
