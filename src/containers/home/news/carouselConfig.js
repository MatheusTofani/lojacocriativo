const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2 right-[-30px] z-10 transform -translate-y-1/2 p-2 hidden md:block"
      onClick={onClick}
      aria-label="Next Slide"
      style={{ background: "transparent", border: "none", cursor: "pointer" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path d="M9 6l6 6-6 6" />
      </svg>
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2 left-[-30px] z-10 transform -translate-y-1/2 p-2 hidden md:block"
      onClick={onClick}
      aria-label="Previous Slide"
      style={{ background: "transparent", border: "none", cursor: "pointer" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path d="M15 6l-6 6 6 6" />
      </svg>
    </button>
  );
};

  const settingsNews = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};
