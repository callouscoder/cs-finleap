import React from 'react';
import './App.scss';

const CLIENT_ID = 'FQTSQTH1G3L2JJ531YVOM5OSROWNRY3BR3B1SB4ON2O4E2HS';
const CLIENT_SECRET = '41SQ3EOINTHXGALQKU33TGJLTDNV43BLTIPCHQD34SGB4C2N';

function App() {
  const fetchData = address => {
    const qs = `
    ?client_id=${CLIENT_ID}
    &client_secret=${CLIENT_SECRET}
    &query=lunch
    &near=${address}
    &v=20170801
    &limit=3`
  }

  const addParticipant = () => {
    const targetParticipantNames = document.getElementById('participantNames');

    const itemNode = document.createElement('li');
    const itemContent = `<input type="text" className="participant-name" placeholder="Type here" value="Max Mustermann" />
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
    </ul>`;
    itemNode.innerHTML = itemContent;
    targetParticipantNames.appendChild(itemNode);
  }

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="app-title">Lunchplace</h1>
      </header>

      <main className="main-content">
        <section className="search-form">
          <form className="search">
            <input type="text" placeholder="Search..." />

            <button className="search-button">Search</button>
          </form>
        </section>

        <section className="places-table">
          <div className="table-outer">
          <section className="participants-list">
            <header className="list-header">
              <h1 className="list-title">Participants</h1>

              <ul className="suggested-locations">
                <li>
                  <article className="location">
                    <h1 className="location-title">Falafel in Berlin</h1>

                    <h2 className="location-type">Falafel Restaurant</h2>

                    <span className="total-votes">6</span>
                  </article>
                </li>

                <li>
                  <article className="location">
                      <h1 className="location-title">Baraka</h1>

                      <h2 className="location-type">Turkish Restaurant</h2>

                      <span className="total-votes">7.8</span>
                  </article>
                </li>

                <li>
                  <article className="location">
                      <h1 className="location-title">McDonald's</h1>

                      <h2 className="location-type">Gourmet Restaurant</h2>
                    
                      <span className="total-votes">9.8</span>
                  </article>
                </li>
              </ul>
            </header>

              <ul id="participantNames" className="participant-names">
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
          </div>

          <footer className="table-footer">
            <button className="add-participant" onClick={() => addParticipant()}>Add participant</button>
          </footer>
        </section>
      </main>
    </div>
  );
}

export default App;
