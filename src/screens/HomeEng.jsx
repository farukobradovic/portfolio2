import React from "react";
import personalImage from "../img/me.jpg";
import befitImage from "../img/Befit.png";
import devImage from "../img/dev.png";
import mcdImage from "../img/mcd.png";
import vadooImage from "../img/vadoo.png";
import { Link } from "react-router-dom";

const HomeEng = () => {
  return (
    <>
      <div className='container'>
        <div className='languages'>
          <Link to='/' className='language-button'>
            BOS
          </Link>
          <Link to='/eng' className='language-button active'>
            ENG
          </Link>
        </div>
        <div className='infos'>
          <div className='left'>
            <div className='img'>
              <img src={personalImage} alt='portfolio-image' />
            </div>
            <h2>Faruk Obradović</h2>
            <p>Web Developer</p>
            <div className='links'>
              <a
                className='blue'
                href='https://www.facebook.com/faruk.obradovic1/'
                target='_blank'
              >
                <i className='fab fa-facebook-square'></i>
              </a>
              <a
                className='dark'
                href='https://github.com/farukobradovic'
                target='_blank'
              >
                <i className='fab fa-github-square'></i>
              </a>
              <a
                className='blue-azure'
                href='https://www.linkedin.com/in/faruk-obradovic-87a054202/'
                target='_blank'
              >
                <i className='fab fa-linkedin'></i>
              </a>
              <a className='yellow' href='mailto:faruk.obradovic@hotmail.com'>
                <i className='fas fa-envelope'></i>
              </a>
            </div>
          </div>
          <div className='right'>
            <p>
              Hi, I'm Faruk Obradović and I was born on 24. april 1995 in
              Mostar. I'm student of Faculty of Information Technology (FIT
              Mostar) in Mostar, and I have god one more exam to get Bechelor's
              degree. Technologies that I learned so far are: .NET Core, MSSQL,
              UML, CSS, SASS, Javascript, Typescript, React JS and little bit of
              Node JS.
            </p>
          </div>
        </div>
      </div>

      <div className='container-max'>
        <div className='projects'>
          <div className='left-sided'>
            <div className='img'>
              <img src={befitImage} alt='Befit' />
            </div>
            <div className='infos'>
              <h2>BEFIT</h2>
              <p>
                BEFIT is application designed for fitness centres that want's to
                have ability to track activites of their members. Some features
                of this application are: scheduling and canceling trainings,
                making diet plans, selling suplementation, calculating
                statistics, reporting bugs to administration, viewing exercises
                and profile managing. Login info: jay.cutler, password:
                Mobitel!1.
              </p>
              <h3>Technologies</h3>
              <p>
                This application uses .NET Core, Javascript, SASS, and for
                database MSSQL.
              </p>
              <div className='buttons'>
                <div className='container2'>
                  <a
                    href='http://p1858.app.fit.ba/'
                    className='btn effect04'
                    data-sm-link-text='BEFIT'
                    target='_blank'
                  >
                    <span>Go to application</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='right-sided'>
            <div className='infos'>
              <h2>McDonalds Clone</h2>
              <p>
                This application is cloned web page of bosnian McDonalds. Next
                to standard options that this site has, I added making and
                updating personal profile, listing and deleting invoices. Order
                cannot be confirmed until user is logged. This application is
                not online, but you can see code in my github repository.
              </p>
              <h3>Technologies</h3>
              <p>
                Backend is using .NET Core (Mediator pattern), client is using
                React JS, Typescript, SASS, MOBX.{" "}
              </p>
              <div className='buttons'>
                <div className='container2'>
                  <a
                    href='https://github.com/farukobradovic/McDonalds-Clone'
                    className='btn2 effect05'
                    data-sm-link-text='McDonalds Clone'
                    target='_blank'
                  >
                    <span>view github</span>
                  </a>
                </div>
              </div>
            </div>
            <div className='img'>
              <img src={mcdImage} alt='Befit' />
            </div>
          </div>
          <div className='left-sided'>
            <div className='img'>
              <img src={vadooImage} alt='Befit' />
            </div>
            <div className='infos'>
              <h2>Vadoo</h2>
              <p>
                Vadoo is based on Badoo, platform for meeting people. This app
                isn't using real backend (Json Server). Login infos: mm,
                password: 1.
              </p>
              <h3>Technologies</h3>
              <p>Javascript, React JS, SASS, JSON Server </p>
              <div className='buttons'>
                <div className='container2'>
                  <a
                    href='https://farukobradovic.github.io/vadooapp/#/'
                    className='btn effect04'
                    data-sm-link-text='VADOO'
                    target='_blank'
                  >
                    <span>Go to application</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='right-sided'>
            <div className='infos'>
              <h2>000dev</h2>
              <p>
                000dev is static web page, without backend or framework. Main
                objective was showing my CSS and SASS skills.
              </p>
              <h3>Technologies</h3>
              <p>CSS and SASS </p>
              <div className='buttons'>
                <div className='container2'>
                  <a
                    href='https://000dev.netlify.app/'
                    className='btn2 effect05'
                    data-sm-link-text='000 dev'
                    target='_blank'
                  >
                    <span>Go to webpage</span>
                  </a>
                </div>
              </div>
            </div>
            <div className='img'>
              <img src={devImage} alt='000dev' className='mini' />
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className='container-max'>
          <div className='container'>
            <h3>I am available for work, contact me &#128516;. </h3>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomeEng;
