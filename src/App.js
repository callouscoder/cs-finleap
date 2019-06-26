import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1 className="app-title">Lunchplace</h1>
      </header>

      <main className="main-content">
        <section className="search-form">
          <form className="search">
            <input type="search" placeholder="Search..." />

            <button className="search-button">Search</button>
          </form>
        </section>

        <section className="places-table">
          <section className="participants-list">
            <header className="list-header">
              <h1 className="list-title">Participants</h1>

              <ul className="suggested-locations">
                <li>
                  <article className="location">
                    <header>
                      <h1 className="location-title">Falafel in Berlin</h1>

                      <h2 className="location-type">Falafel Restaurant</h2>
                    </header>

                    <footer>
                      <span className="total-votes">6</span>
                    </footer>
                  </article>
                </li>

                <li>
                  <article className="location">
                    <header>
                      <h1 className="location-title">Baraka</h1>

                      <h2 className="location-type">Turkish Restaurant</h2>
                    </header>

                    <footer>
                      <span className="total-votes">7.8</span>
                    </footer>
                  </article>
                </li>

                <li>
                  <article className="location">
                    <header>
                      <h1 className="location-title">McDonald's</h1>

                      <h2 className="location-type">Gourmet Restaurant</h2>
                    </header>

                    <footer>
                      <span className="total-votes">9.8</span>
                    </footer>
                  </article>
                </li>
              </ul>
            </header>

              <ul>
                <li>
                  <input type="text" className="participant-name" placeholder="Type here" value="Max Mustermann" />

                  <ul>
                    <li>
                      <button className="option-a">Tick</button>
                    </li>
                    <li>
                      <button className="option-b">Tick</button>
                    </li>
                    <li>
                      <button className="option-c">Tick</button>
                    </li>
                  </ul>
                </li>
                <li>
                  <input type="text" className="participant-name" placeholder="Type here" value="Kevin Müller" />

                  <ul>
                    <li>
                      <button className="option-a">Tick</button>
                    </li>
                    <li>
                      <button className="option-b">Tick</button>
                    </li>
                    <li>
                      <button className="option-c">Tick</button>
                    </li>
                  </ul>
                </li>
                <li>
                  <input type="text" className="participant-name" placeholder="Type here" value="Dennis Mustermann" />

                  <ul>
                    <li>
                      <button className="option-a">Tick</button>
                    </li>
                    <li>
                      <button className="option-b">Tick</button>
                    </li>
                    <li>
                      <button className="option-c">Tick</button>
                    </li>
                  </ul>
                </li>
                <li>
                  <input type="text" className="participant-name" placeholder="Type here" value="Donald Trump" />

                  <ul>
                    <li>
                      <button className="option-a">Tick</button>
                    </li>
                    <li>
                      <button className="option-b">Tick</button>
                    </li>
                    <li>
                      <button className="option-c">Tick</button>
                    </li>
                  </ul>
                </li>
                <li>
                  <input type="text" className="participant-name" placeholder="Type here" value="" />

                  <ul>
                    <li>
                      <button className="option-a">Tick</button>
                    </li>
                    <li>
                      <button className="option-b">Tick</button>
                    </li>
                    <li>
                      <button className="option-c">Tick</button>
                    </li>
                  </ul>
                </li>
              </ul>
          </section>

          <section className="suggestions">

          </section>

          <footer className="table-footer">
            <button className="add-participant">Add participant</button>
          </footer>
        </section>
      </main>
    </div>
  );
}

export default App;
