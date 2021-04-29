import React from "react";
import personalImage from "../img/me.jpg";
import befitImage from "../img/Befit.png";
import devImage from "../img/dev.png";
import mcdImage from "../img/mcd.png";
import vadooImage from "../img/vadoo.png";
import { Link } from "react-router-dom";

const HomeBos = () => {
  return (
    <>
      <div className='container'>
        <div className='languages'>
          <Link to='/' className='language-button active'>
            BOS
          </Link>
          <Link to='/eng' className='language-button '>
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
              Zovem se Faruk Obradović, rođen sam 24.04.1995 godine i dolazim iz
              Mostara. Student sam Fakulteta Informacijskih Tehnologija u
              Mostaru na kojem imam još jedan ispit do kraja studija. Od
              tehologija koje poznajem tu su .NET Core, MSSQL, Javascript,
              Typescript, React JS te površno Node JS.
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
                BEFIT je aplikacija namijenjena fitnes centrima koji žele da
                imaju dodatnu mogućnost praćenja rada svojih članova. Ova web
                aplikacija omogućava kreiranje te otkazivanje treninga od strane
                trenere odnosno korisnika, kreiranje plana ishrane, prodaju
                suplementacije, mjerenje statistika, prijavljivanje bugova
                administraciji, pregled vježbi te upravljanje profilom. Login
                podaci su jay.cutler i password: Mobitel!1.
              </p>
              <h3>Tehnologije</h3>
              <p>
                Aplikacija je pisana u .NET Core, Javascript i SASS, te baza
                podataka u MSSQL.
              </p>
              <div className='buttons'>
                <div className='container2'>
                  <a
                    href='http://p1858.app.fit.ba/'
                    className='btn effect04'
                    data-sm-link-text='BEFIT'
                    target='_blank'
                  >
                    <span>pogledaj aplikaciju</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='right-sided'>
            <div className='infos'>
              <h2>McDonalds Clone</h2>
              <p>
                Ova je aplikacija u biti klonirani sajt domaćeg sajta mcdonalds.
                Pored standardnih opcija implementirane su i kreiranje i
                ažuriranje profila, pravljenje narudžbe, pregled faktura te
                brisanje istih. Narudžbu nije moguće potvrditi dok se korisnik
                ne prijavi. Aplikacija nije online te se može pogledati njen kod
                na githubu.
              </p>
              <h3>Tehnologije</h3>
              <p>
                Aplikacija je pisana u .NET Core tj. njen API, klijentski dio je
                urađen sa React JS + MOBX + Typescript te SASS.
              </p>
              <div className='buttons'>
                <div className='container2'>
                  <a
                    href='https://github.com/farukobradovic/McDonalds-Clone'
                    className='btn2 effect05'
                    data-sm-link-text='McDonalds Clone'
                    target='_blank'
                  >
                    <span>pogledaj github</span>
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
                Vadoo je osmišljen na bazi badoo, aplikacije za upoznavanje. Ne
                koristi pravi backend tako da nije bilo moguće neke stvari
                implementirati, već fake JSON Server. Login podaci su: mm,
                password: 1.
              </p>
              <h3>Tehnologije</h3>
              <p>
                Aplikacija je pisana u Javascript, odnosno React JS, SASS te
                JSON Server.
              </p>
              <div className='buttons'>
                <div className='container2'>
                  <a
                    href='https://farukobradovic.github.io/vadooapp/#/'
                    className='btn effect04'
                    data-sm-link-text='VADOO'
                    target='_blank'
                  >
                    <span>pogledaj aplikaciju</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='right-sided'>
            <div className='infos'>
              <h2>000dev</h2>
              <p>
                000 dev je statična web stranica koja nema nikakav backend.
                Ovdje je bio primarni cilj na pokazivanju znanja CSS i SASS.
              </p>
              <h3>Tehnologije</h3>
              <p>CSS i SASS </p>
              <div className='buttons'>
                <div className='container2'>
                  <a
                    href='https://000dev.netlify.app/'
                    className='btn2 effect05'
                    data-sm-link-text='000 dev'
                    target='_blank'
                  >
                    <span>pogledaj web sajt</span>
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
            <h3>Dostupan sam za posao, kontaktirajte me &#128516;. </h3>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomeBos;
