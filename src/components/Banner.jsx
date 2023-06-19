import bg from "../assets/img/banner.jpg";
import arrowPrev from "../assets/img/arrow-prev.svg";
import arrowNext from "../assets/img/arrow-next.svg";

const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <div className="banner__wrapper ">
          <h1>МЫ СОЗДАЕМ БУДУЩЕЕ</h1>
          <button>Подробнее</button>
        </div>
        <div className="banner__arrows">
          <img src={arrowPrev} alt="Arrow: Prev" />
          <img src={arrowNext} alt="Arrow: Next" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
