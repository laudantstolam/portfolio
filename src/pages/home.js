import React from "react";
import TypedText from "./components/typed.js";
// import SkillsSection from "./components/skills.js";

class Home extends React.Component {
  render() {
    return (
      <div>
        {/* <!-- ======= Mobile nav toggle button ======= --> */}
        {/* <!-- <button type="button" className="mobile-nav-toggle d-xl-none"><i className="bi bi-list mobile-nav-toggle"></i></button> --> */}
        <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
        {/* <!-- ======= Header ======= --> */}
        <header id="header" className="d-flex flex-column justify-content-center">
          <nav id="navbar" className="navbar nav-menu">
            <ul>
              <li>
                <a href="#hero" className="nav-link scrollto active">
                  <i className="bx bx-home"></i> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link scrollto">
                  <i className="bx bx-user"></i> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#experience" className="nav-link scrollto">
                  <i className="bx bx-ghost"></i> <span>Experiences</span>
                </a>
              </li>
              <li>
                <a href="#resume" className="nav-link scrollto">
                  <i className="bx bx-file-blank"></i> <span>Skills</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" className="nav-link scrollto">
                  <i className="bx bx-book-content"></i> <span>Portfolio</span>
                </a>
              </li>
             
            </ul>
          </nav>
        </header>

        {/* <!-- ======= Hero Section ======= --> */}
        <section id="hero" className="d-flex flex-column justify-content-center">
          <div className="container" data-aos="zoom-in" data-aos-delay="100">
            <h1>Ashley</h1>
            <p>
              I'm a {" "}
              {/* <span
                className="typed"
                data-typed-items="Designer , Developer , Freelancer , Photographer"
              ></span> */}
              <TypedText />
            </p>
            <div className="social-links">
              <a href="https://github.com/laudantstolam" className="github">
                <i className="bx bxl-github"></i>
              </a>
              {/* <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                        <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a> */}
            </div>
          </div>
        </section>

        <main id="main">
          {/* <!-- ======= About Section ======= --> */}
          <section id="about" className="about">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>About</h2>
              </div>

              <div className="row">
                <div className="col-lg-4">
                  <img
                    src="https://raw.githubusercontent.com/Ash0645/image_remote/main/202401230105886.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-lg-8 pt-4 pt-lg-0 content">                
                  <div className="row">
                    <div className="col-lg-12">
                      <ul>
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>Name:</strong> <span>Ashley, 劉宜蓁(19y/she)</span>
                        </li> 
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>City:</strong> <span>Taipei, Taiwan</span>
                        </li>                     
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>School:</strong> <span>National Taipei University of Technology(NTUT)--undergraduate</span>
                        </li>
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>Department:</strong> <span>Department of Intelligent Automation Engineering <a href="https://iae.ntut.edu.tw/?Lang=en">(LINK)</a></span>
                        </li>
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>Language:</strong> <span>fluent→Manderine/English/Japanese<br/>learing→German/Spanish</span>
                        </li>
                        
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>Contact:</strong>{" "}
                          <span>rachelle0607@gmail.com</span>
                        </li>    
                      </ul>
                    </div>
                  </div>
                  <p>
                  I am Ashley, and I am currently enrolled in NTUT's five-year Intelligent Automation Engineering program. Which is a program that combines engineering and computer science. I've been interested in web development and cyber security. I enjoy designing and implementing helpful, cool things to make my life more interesting:)
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* <!-- ======= Working Experiences Section ======= --> */}
          <section id="experience" className="experience">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Working Experiences</h2>
              </div>
              <div className="row">
                {/* <img alt="resume-experience" src="https://raw.githubusercontent.com/Ash0645/image_remote/main/202401152149480.png"/> */}
                <div className="col-3 d-flex justify-content-center">
                  <img style={{ maxWidth: '45%'}} alt="AUO-logo" src="https://raw.githubusercontent.com/Ash0645/image_remote/main/202401152201523.jpg"></img>
                  </div>
                <div className="col-9">
                  <h4 color="#0563bb">Software develop internship  •  AU Optronics Corporation (AUO)</h4>
                  <h5>July 2023 - September 2023</h5>
                  <p>Designed an intuitive and user-friendly interface(DASHBOARD) for an eco-OVEN system in order to display and claculate realtime status of all machienes in FAB center. (Gathering PLC data and presenting it in the front end with Django+FastAPI)</p>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- ======= Certificates Section ======= --> */}
          <section id="experience" className="experience">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Certificates</h2>
              </div>
              <div className="row">
                {/* <img alt="resume-experience" src="https://raw.githubusercontent.com/Ash0645/image_remote/main/202401152149480.png"/> */}
                <div className="col-3 d-flex justify-content-center">
                  <img style={{ maxWidth: '45%'}} alt="AUO-logo" src="https://raw.githubusercontent.com/Ash0645/image_remote/main/202402211608170.png"></img>
                  </div>
                <div className="col-9">
                  <h4 color="#0563bb">MOEA Certified Information Security Engineer-Associate Level</h4>
                  <h5>November 2023</h5>
                </div>
              </div>
            </div>
          </section>
          
          {/* <!-- ======= Resume Section ======= --> */}
          <section id="resume" className="resume">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Skills</h2>
                <p>
                  I've been interested and advancing in different feilds, here are some skills that I've been advancing.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <h3 className="resume-title">Software Developing</h3>
                  <div className="resume-item pb-0">
                    <h4>Programming Language</h4>                    
                      <ul>
                        <li>Python</li>
                        <li>C C++</li>
                        <li>Js Html Css</li>
                        <li>R</li>
                        <li>Bash Shell</li>
                      </ul>
                  </div>
                  <div className="resume-item pb-0">
                    <h4>developing skills</h4>
                    <p><em>Framework</em></p>
                    <ul>
                      <li>Django, React, Vue, nextJS</li>  
                      <li>MVC, REST</li>                    
                    </ul>
                    <p><em>APIs</em></p>                
                    <ul>
                      <li>Flask, Fast API, RESTful API</li>                    
                    </ul>
                    <p><em>Database</em></p>
                    <ul>
                      <li>MySQL, MongoDB, Firestore</li>                     
                    </ul>
                  </div>
                  <div className="resume-item">
                    <h4>Others</h4> 
                    <p><em>Deep Learning</em></p>
                      <ul>
                        <li>Tensorflow</li>
                        <li>Pytorch</li>
                      </ul>
                    <p><em>WorkFlow</em></p>
                      <ul>
                        <li>Github, Gitlab</li>                       
                      </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <h3 className="resume-title">Engineering</h3>
                  <div className="resume-item pb-0">
                    <h4>Overview</h4>
                      <ul>
                        <li>ROS system</li>
                        <li>AUTOCAD moduling</li>
                        <li>Micro Drilling (EDM machiene)</li>
                      </ul>               
                  </div>
                  <h3 className="resume-title">Cyber Security</h3>
                  <div className="resume-item pb-0">
                    <h4>Blue Team</h4>
                    <p>
                      focusing on reverse engineering and forensic/auditing skills, recently been preparing for ISACA-CISA certificate 
                    </p>
                    <ul>
                     <li>Ghidra/IDA/angr</li>
                     <li>participating in 2025 Teamt5 camp</li>      
                    </ul>
                  </div>
                  <div className="resume-item pb-0">
                    <h4>Red Team</h4>
                    <p>
                      has participating in some ctf competition, and familiar with Nmap/Wireshark/sqlmap 
                    </p>
                    <ul>
                      <li>AEGIS(神盾盃) pre-exam: 4, final: 6</li>
                      <li>GICS(資安女婕思) final: 1(2023), 2(2024)</li>
                      <li>CGGC pre-exam</li>
                    </ul>                  
                  </div>
                  <h3 className="resume-title">Designing</h3>
                  <div className="resume-item pb-0">
                  <h4>JS extends Framework</h4>
                    <ul>
                      <li>D3.js</li>
                      <li>Echart, Apexchart, Mapbox</li>
                      <li>P5.js</li>
                      <li>Three.js</li>
                    </ul>
                    <h4>Tools</h4>
                    <ul>
                      <li>Adobe Photoshop, Illustrator, Indesign</li>
                      <li>Figma, Canva</li>
                    </ul>

                  </div>
                </div>
              </div>
            </div>
          </section>

          

          {/* <!-- ======= Portfolio Section ======= --> */}
          <section id="portfolio" className="portfolio section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Portfolio</h2>
                <p>
                  Here are some project I've made :)
                </p>
              </div>

              {/* <div className="row">
                <div
                  className="col-lg-12 d-flex justify-content-center"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <ul id="portfolio-flters">
                    <li data-filter="*" className="filter-active">
                      All
                    </li>
                    <li data-filter=".filter-app">App</li>
                    <li data-filter=".filter-card">Card</li>
                    <li data-filter=".filter-web">Web</li>
                  </ul>
                </div>
              </div> */}

              <div
                className="row portfolio-container"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img
                      src="https://raw.githubusercontent.com/Ash0645/image_remote/main/202401311251052.png"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">                      
                      <h4>Spotify DUAL</h4>
                      <p>spotify data visualization || FLASK+D3</p>
                      <div className="portfolio-links">                        
                        <a
                          href="https://github.com/laudantstolam/data_analyze_dual"
                          className="portfolio-details-lightbox"
                          data-glightbox="type: external"
                          title="Portfolio Details"
                        >
                          <i class='bx bxl-github'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div className="portfolio-wrap">
                    <img
                      src="https://raw.githubusercontent.com/Ash0645/image_remote/main/202402110006740.png"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h4>What does Shu says</h4>
                      <p>React based clicking game || React+Firebase</p>
                      <div className="portfolio-links">
                        <a
                          href="https://birshudeyy2023.github.io/what-does-Shu-say/"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="Web 3"
                        >
                          <i className="bx bxl-internet-explorer"></i>
                        </a>
                        <a
                          href="https://github.com/BirShuDeyy2023/what-does-Shu-say"
                          className="portfolio-details-lightbox"
                          data-glightbox="type: external"
                          title="Portfolio Details"
                        >
                          <i class='bx bxl-github'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img
                      src="https://raw.githubusercontent.com/Ash0645/image_remote/main/202306212151683.png"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h4>SUBTITLE</h4>
                      <p>a focusing project which support Pomodoro/Music Playing/Todo List || Pygame</p>
                      <div className="portfolio-links">
                        <a
                          href="https://github.com/Lyz-0723/Subtitle"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="App 2"
                        >
                          <i class='bx bxl-github'></i>
                        </a>
                        
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div className="portfolio-wrap">
                    <img
                      src="https://raw.githubusercontent.com/Ash0645/image_remote/main/202402110023222.png"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h4>Font detect and suggest</h4>
                      <p>self trained+data prepared DL model that can detect EG Fonts and Recommend simillar ones || Tensorflow</p>
                      <div className="portfolio-links">
                        <a
                          href="https://www.youtube.com/watch?v=g9L1hlymcEQ"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="Card 2"
                        >
                          <i class='bx bxl-youtube'></i>
                        </a>
                        <a
                          href="https://github.com/laudantstolam/font_detect"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="App 2"
                        >
                          <i class='bx bxl-github'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div className="portfolio-wrap">
                    <img
                      src="assets/img/portfolio/portfolio-5.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h4>Web 2</h4>
                      <p>Web</p>
                      <div className="portfolio-links">
                        <a
                          href="assets/img/portfolio/portfolio-5.jpg"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="Web 2"
                        >
                          <i className="bx bx-plus"></i>
                        </a>
                        <a
                          href="portfolio-details.html"
                          className="portfolio-details-lightbox"
                          data-glightbox="type: external"
                          title="Portfolio Details"
                        >
                          <i className="bx bx-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img
                      src="assets/img/portfolio/portfolio-6.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h4>App 3</h4>
                      <p>App</p>
                      <div className="portfolio-links">
                        <a
                          href="assets/img/portfolio/portfolio-6.jpg"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="App 3"
                        >
                          <i className="bx bx-plus"></i>
                        </a>
                        <a
                          href="portfolio-details.html"
                          className="portfolio-details-lightbox"
                          data-glightbox="type: external"
                          title="Portfolio Details"
                        >
                          <i className="bx bx-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div className="portfolio-wrap">
                    <img
                      src="assets/img/portfolio/portfolio-7.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h4>Card 1</h4>
                      <p>Card</p>
                      <div className="portfolio-links">
                        <a
                          href="assets/img/portfolio/portfolio-7.jpg"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="Card 1"
                        >
                          <i className="bx bx-plus"></i>
                        </a>
                        <a
                          href="portfolio-details.html"
                          className="portfolio-details-lightbox"
                          data-glightbox="type: external"
                          title="Portfolio Details"
                        >
                          <i className="bx bx-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div className="portfolio-wrap">
                    <img
                      src="assets/img/portfolio/portfolio-8.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h4>Card 3</h4>
                      <p>Card</p>
                      <div className="portfolio-links">
                        <a
                          href="assets/img/portfolio/portfolio-8.jpg"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="Card 3"
                        >
                          <i className="bx bx-plus"></i>
                        </a>
                        <a
                          href="portfolio-details.html"
                          className="portfolio-details-lightbox"
                          data-glightbox="type: external"
                          title="Portfolio Details"
                        >
                          <i className="bx bx-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div className="portfolio-wrap">
                    <img
                      src="assets/img/portfolio/portfolio-9.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h4>Web 3</h4>
                      <p>Web</p>
                      <div className="portfolio-links">
                        <a
                          href="assets/img/portfolio/portfolio-9.jpg"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="Web 3"
                        >
                          <i className="bx bx-plus"></i>
                        </a>
                        <a
                          href="portfolio-details.html"
                          className="portfolio-details-lightbox"
                          data-glightbox="type: external"
                          title="Portfolio Details"
                        >
                          <i className="bx bx-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </section>

          {/* <!-- ======= Services Section ======= --> */}
          {/* <section id="services" className="services">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Services</h2>
                <p>
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </p>
              </div>

              <div className="row">
                <div
                  className="col-lg-4 col-md-6 d-flex align-items-stretch"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <div className="icon-box iconbox-blue">
                    <div className="icon">
                      <svg
                        width="100"
                        height="100"
                        viewBox="0 0 600 600"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke="none"
                          strokeWidth="0"
                          fill="#f5f5f5"
                          d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                        ></path>
                      </svg>
                      <i className="bx bxl-dribbble"></i>
                    </div>
                    <h4>
                      <a href="">Lorem Ipsum</a>
                    </h4>
                    <p>
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="icon-box iconbox-orange ">
                    <div className="icon">
                      <svg
                        width="100"
                        height="100"
                        viewBox="0 0 600 600"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke="none"
                          strokeWidth="0"
                          fill="#f5f5f5"
                          d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"
                        ></path>
                      </svg>
                      <i className="bx bx-file"></i>
                    </div>
                    <h4>
                      <a href="">Sed Perspiciatis</a>
                    </h4>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div className="icon-box iconbox-pink">
                    <div className="icon">
                      <svg
                        width="100"
                        height="100"
                        viewBox="0 0 600 600"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke="none"
                          strokeWidth="0"
                          fill="#f5f5f5"
                          d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"
                        ></path>
                      </svg>
                      <i className="bx bx-tachometer"></i>
                    </div>
                    <h4>
                      <a href="">Magni Dolores</a>
                    </h4>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <div className="icon-box iconbox-yellow">
                    <div className="icon">
                      <svg
                        width="100"
                        height="100"
                        viewBox="0 0 600 600"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke="none"
                          strokeWidth="0"
                          fill="#f5f5f5"
                          d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"
                        ></path>
                      </svg>
                      <i className="bx bx-layer"></i>
                    </div>
                    <h4>
                      <a href="">Nemo Enim</a>
                    </h4>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="icon-box iconbox-red">
                    <div className="icon">
                      <svg
                        width="100"
                        height="100"
                        viewBox="0 0 600 600"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke="none"
                          strokeWidth="0"
                          fill="#f5f5f5"
                          d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572"
                        ></path>
                      </svg>
                      <i className="bx bx-slideshow"></i>
                    </div>
                    <h4>
                      <a href="">Dele Cardo</a>
                    </h4>
                    <p>
                      Quis consequatur saepe eligendi voluptatem consequatur
                      dolor consequuntur
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div className="icon-box iconbox-teal">
                    <div className="icon">
                      <svg
                        width="100"
                        height="100"
                        viewBox="0 0 600 600"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke="none"
                          strokeWidth="0"
                          fill="#f5f5f5"
                          d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"
                        ></path>
                      </svg>
                      <i className="bx bx-arch"></i>
                    </div>
                    <h4>
                      <a href="">Divera Don</a>
                    </h4>
                    <p>
                      Modi nostrum vel laborum. Porro fugit error sit minus
                      sapiente sit aspernatur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          {/* <!-- ======= Testimonials Section ======= --> */}
          {/* <section id="testimonials" className="testimonials section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Testimonials</h2>
              </div>

              <div
                className="testimonials-slider swiper-container"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-1.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Proin iaculis purus consequat sem cure digni ssim donec
                        porttitora entum suscipit rhoncus. Accusantium quam,
                        ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                        risus at semper.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-2.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Export tempor illum tamen malis malis eram quae irure
                        esse labore quem cillum quid cillum eram malis quorum
                        velit fore eram velit sunt aliqua noster fugiat irure
                        amet legam anim culpa.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-3.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Jena Karlis</h3>
                      <h4>Store Owner</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Enim nisi quem export duis labore cillum quae magna enim
                        sint quorum nulla quem veniam duis minim tempor labore
                        quem eram duis noster aute amet eram fore quis sint
                        minim.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-4.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Matt Brandon</h3>
                      <h4>Freelancer</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Fugiat enim eram quae cillum dolore dolor amet nulla
                        culpa multos export minim fugiat minim velit minim dolor
                        enim duis veniam ipsum anim magna sunt elit fore quem
                        dolore labore illum veniam.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-5.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>John Larson</h3>
                      <h4>Entrepreneur</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Quis quorum aliqua sint quem legam fore sunt eram irure
                        aliqua veniam tempor noster veniam enim culpa labore
                        duis sunt culpa nulla illum cillum fugiat legam esse
                        veniam culpa fore nisi cillum quid.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </section> */}

          
        </main>

        {/* <!-- ======= Footer ======= --> */}
        {/* <footer id="footer">
          <div className="container">
            <h3>Brandon Johnson</h3>
            <p>
              Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
              eligendi fuga maxime saepe commodi placeat.
            </p>
            <div className="social-links">
              <a href="#" className="twitter">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#" className="facebook">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="#" className="google-plus">
                <i className="bx bxl-skype"></i>
              </a>
              <a href="#" className="linkedin">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>MyResume</span>
              </strong>
              . All Rights Reserved
            </div>
          </div>
        </footer> */}
      </div>
    );
  }
}

export default Home;
