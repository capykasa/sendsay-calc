import '../scss/app.scss';

const App = () => {
  return (
    <div className="page">
      <div className="page-main">
        <div className="page-main__constructor">
          <div className="constructor__container">
            <div className="wrapper">
              <div className="container">
                <div className="display">
                  <span className="display_value">0</span>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="container">
                <div className="operators">
                  <button className="button operators_item" type="button">/<span className=""></span></button>
                  <button className="button operators_item" type="button">x<span className=""></span></button>
                  <button className="button operators_item" type="button">-<span className=""></span></button>
                  <button className="button operators_item" type="button">+<span className=""></span></button>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="container container-blocked">
                <div className="numbers">
                  <button className="button numbers_item" type="button">7<span className=""></span></button>
                  <button className="button numbers_item" type="button">8<span className=""></span></button>
                  <button className="button numbers_item" type="button">9<span className=""></span></button>
                  <button className="button numbers_item" type="button">4<span className=""></span></button>
                  <button className="button numbers_item" type="button">5<span className=""></span></button>
                  <button className="button numbers_item" type="button">6<span className=""></span></button>
                  <button className="button numbers_item" type="button">1<span className=""></span></button>
                  <button className="button numbers_item" type="button">2<span className=""></span></button>
                  <button className="button numbers_item" type="button">3<span className=""></span></button>
                  <button className="button numbers_item" type="button">0<span className=""></span></button>
                  <button className="button numbers_item" type="button">,<span className=""></span></button>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="container">
                <div className="calc">
                  <button className="button calc-button" type="button">=</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-main__canvas">
          <div className="mode-switch">
            <button className="button mode-switch_button" type="button">
              <span className="mode-switch_svg">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.7678 11.7678C12.2366 11.2989 12.5 10.663 12.5 10C12.5 9.33696 12.2366 8.70107 11.7678 8.23223C11.2989 7.76339 10.663 7.5 10 7.5C9.33696 7.5 8.70107 7.76339 8.23223 8.23223C7.76339 8.70107 7.5 9.33696 7.5 10C7.5 10.663 7.76339 11.2989 8.23223 11.7678C8.70107 12.2366 9.33696 12.5 10 12.5C10.663 12.5 11.2989 12.2366 11.7678 11.7678Z" stroke="#4D5562" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M2.04834 9.99999C3.11001 6.61916 6.26917 4.16666 10 4.16666C13.7317 4.16666 16.89 6.61916 17.9517 9.99999C16.89 13.3808 13.7317 15.8333 10 15.8333C6.26917 15.8333 3.11001 13.3808 2.04834 9.99999Z" stroke="#4D5562" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              <span className="mode-switch_text">Runtime</span>
            </button>
            <button className="button mode-switch_button mode-switch_button-active" type="button">
              <span className="mode-switch_svg">
                <svg className="icon-active" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 13.3333L4.16666 10L7.5 6.66668M12.5 6.66668L15.8333 10L12.5 13.3333" stroke="#5D5FEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              <span className="mode-switch_text"> Constructor</span>
            </button>
          </div>
          <div className="canvas__container canvas__container-hover">
            <div className="container">
              <div className="calc">
                <button className="button calc-button" type="button">=</button>
              </div>
            </div>

            <svg width="250" height="6" viewBox="0 0 250 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.113249 3L3 5.88675L5.88675 3L3 0.113249L0.113249 3ZM249.887 3L247 0.113249L244.113 3L247 5.88675L249.887 3ZM3 3.5H247V2.5H3V3.5Z" fill="#5D5FEF" />
            </svg>

            <div className="canvas__container-empty">
              <svg className="canvas__container_svg" width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7778 1V5.44444" stroke="black" stroke-width="2" stroke-linecap="round" />
                <path d="M21 3.22222L16.5556 3.22222" stroke="black" stroke-width="2" stroke-linecap="round" />
                <path d="M12.3889 3.22222H5C2.79086 3.22222 1 5.01309 1 7.22223V16.2778M18.7778 9.61111V17C18.7778 19.2091 16.9869 21 14.7778 21H5C2.79086 21 1 19.2091 1 17V16.2778M1 16.2778L4.83824 12.4395C6.40034 10.8774 8.93298 10.8774 10.4951 12.4395C11.8961 13.8406 13.5664 15.5108 14.8889 16.8333" stroke="black" stroke-width="2" stroke-linecap="round" />
                <path d="M18.7778 14.6111L18.2729 14.1062C16.7108 12.5441 14.1781 12.5441 12.616 14.1062L12.3889 14.3333" stroke="black" stroke-width="2" stroke-linecap="round" />
                <circle cx="12.1111" cy="7.66667" r="0.555556" fill="black" />
              </svg>
              <h3 className="canvas__container_title">Перетащите сюда</h3>
              <p className="canvas__container_text">любой элемент из левой панели</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
