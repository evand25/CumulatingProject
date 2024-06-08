import './App.css';
import BerlinInfo from './berlinPanel.js';
import MunichInfo from './munichPanel.js';
import CopenhagenInfo from './copenhagenPanel.js';
import LondonInfo from './londonPanel.js';
import BarcelonaInfo from './barcelonaPanel.js';
import NaplesInfo from './naplesPanel.js';
import AmsterdamInfo from './amsterdamPanel.js';
import ParisInfo from './parisPanel.js';
import BerlinInfo2 from './berlinPanel2.js';
import MunichInfo2 from './munichPanel2.js';
import CopenhagenInfo2 from './copenhagenPanel2.js';
import LondonInfo2 from './londonPanel2.js';
import BarcelonaInfo2 from './barcelonaPanel2.js';
import NaplesInfo2 from './naplesPanel2.js';
import AmsterdamInfo2 from './amsterdamPanel2.js';
import ParisInfo2 from './parisPanel2.js';
import {useState, createContext, useContext } from 'react';



  const destinations = {
  start_list: 1,
  destination_list: []
};

const berlin = {
  league: "Bundesliga",
  team: "Hertha Berlin and Union Berlin",
  crime: "moderate",
  signs: "Brandenburg Gate",
  "RouteURL": {
    "#cdata-section": "https://www.berlin.de/en/"
  },
}
const munich = {
  league: "Bundesliga",
  team: "Bayern Munich",
  crime: "low",
  signs: "BMW museum",
  "RouteURL": {
    "#cdata-section": "https://www.muenchen.de/en/home"
  },
}
const copenhagen = {
  league: "Danish Superliga",
  team: "FC Copenhagen",
  crime: "low",
  signs: "Tivoli Gardens",
  "RouteURL": {
    "#cdata-section": "https://www.visitcopenhagen.com/node/1345"
  },
}
const london = {
  league: "Premier League",
  team: "Arsenal, Chelsea, Tottenham, West Ham, Crystal Palace, Fulham, and Brentford",
  crime: "moderate",
  signs: "Camden Lock",
  "RouteURL": {
    "#cdata-section": "https://www.visitlondon.com/things-to-do/visiting-london-for-the-first-time/london-faqs"
  },
}
const barcelona = {
  league: "La Liga",
  team: "FC Barcelona",
  crime: "moderate",
  signs: "Basilica de la Sagrada Familia",
  "RouteURL": {
    "#cdata-section": "https://www.barcelona.cat/en"
  }
}
const naples = {
  league: "Serie A",
  team: "SSC Napoli",
  crime: "high",
  signs: "Museo Cappella Sansevero",
  "RouteURL": {
    "#cdata-section": "https://www.visitnaples.eu/en"
  }
}
const amsterdam = {
  league: "Eredivisie",
  team: "AFC Ajax",
  crime: "low",
  signs: "Van Gogh Museum",
  "RouteURL": {
    "#cdata-section": "https://www.iamsterdam.com/en"
  }
}
const paris = {
  league: "Ligue 1",
  team: "Paris Saint Germain",
  crime: "moderate",
  signs: "Eiffel Tower",
  "RouteURL": {
    "#cdata-section": "https://parisjetaime.com/eng/"
  }
}

const DestinationContext = createContext({});

function App() {
  const berlinLeague = berlin.league;
  const berlinTeam = berlin.team;
  const berlinCrime = berlin.crime;
  const berlinSpot = berlin.signs;
  const munichLeague = munich.league;
  const munichTeam = munich.team;
  const munichCrime = munich.crime;
  const munichSpot = munich.signs;
  const copenhagenLeague = copenhagen.league;
  const copenhagenTeam = copenhagen.team;
  const copenhagenCrime = copenhagen.crime;
  const copenhagenSpot = copenhagen.signs;
  const londonLeague = london.league;
  const londonTeam = london.team;
  const londonCrime = london.crime;
  const londonSpot = london.signs;
  const barcelonaLeague = barcelona.league;
  const barcelonaTeam = barcelona.team;
  const barcelonaCrime = barcelona.crime;
  const barcelonaSpot = barcelona.signs;
  const naplesLeague = naples.league;
  const naplesTeam = naples.team;
  const naplesCrime = naples.crime;
  const naplesSpot = naples.signs;
  const amsterdamLeague = amsterdam.league;
  const amsterdamTeam = amsterdam.team;
  const amsterdamCrime = amsterdam.crime;
  const amsterdamSpot = amsterdam.signs;
  const parisLeague = paris.league;
  const parisTeam = paris.team;
  const parisCrime = paris.crime;
  const parisSpot = paris.signs;
  const [ destinationState, setDestinationState ] = useState(destinations);
  const addList = function(evt, destination) {
  
    const new_destination = {...destination};
    new_destination.added = ! new_destination.added;

    setDestinationState((current0) => {
      const newDestinationState = {
        start_list: current0.start_list,
        destination_list: current0.destination_list.map((oldDestination) => oldDestination.list === destination.list ? new_destination : oldDestination)
        };
      return newDestinationState;
      
    });
    
  }

  const addHandler = function(evt) {
    evt.preventDefault();

    setDestinationState((current1) => {
      let new_destination_list = [...current1.destination_list];
    new_destination_list.push({
        list: current1.start_list + 1,
        label: evt.target.destinationlabel.value,
        added: false
    });
    const new_destinationState = {
      start_list: current1.start_list + 1,
      destination_list: new_destination_list
    }
      return new_destinationState;
  });
  };

  const removeHandler = function(evt, destination_list) {
    evt.preventDefault();
    const new_destination_list = destinationState.destination_list.filter((destination) => destination.list != destination_list);
    const new_destinationState = {
      start_list: destinationState.start_list,
      destination_list: new_destination_list
    };
    setDestinationState((current2) => {
      const new_destination_list = destinationState.destination_list.filter((destination) => destination.list != destination_list);
    const new_destinationState = {
      start_list: destinationState.start_list,
      destination_list: new_destination_list
    }; 
       return new_destinationState;
    });

  };
  const destinationCxtValue = {
    destinations: destinationState.destination_list
  }

  return (
    <>
    <h1>EUROPEAN VACATION GUIDE FOR SOCCER FANS</h1>
      <p>This is your all-inclusive guide for some of the greatest European soccer destination!</p>
    <h2>_____________________________________________ </h2>
    <h2>Find a destination you like? Add it to your list here!</h2>
      <NewResponse addResponse={addHandler}></NewResponse>
      <NewDestination addDestination={addHandler}></NewDestination>
      <DestinationContext.Provider value={destinationCxtValue}>
      <DestinationList></DestinationList>
      </DestinationContext.Provider>
    <h2>_____________________________________________ </h2>
      <h2 className='ceeurope'>Central and Eastern Europe</h2>
      <h3 className='bold'>Berlin, Germany </h3>
      <p>Berlin is one of the cultural capitals of Europe! With great food, cultural landmarks, and a relaxed pace of life, anyone could see the charm that engulfs the city.</p>
      <ul>
      <li><BerlinInfo>The main soccer league known around Berlin is the { berlinLeague }.</BerlinInfo></li>
      <li><BerlinInfo>The main soccer teams followed around Berlin are { berlinTeam }.</BerlinInfo></li>
      <li><BerlinInfo>Berlin is a safe place to go with a crime index of { berlinCrime }.</BerlinInfo></li>
      <li><BerlinInfo>Outside of soccer, one of the best places to visit in Berlin is the { berlinSpot }.</BerlinInfo></li>
      </ul>
      <BerlinInfo2></BerlinInfo2>
      <h3 className='bold'>Munich, Germany </h3>
      <p>Munich provides a fairytale-like backdrop as you walk through the beautiful streets. Known worldwide for Oktoberfest, Munich provides people of all ages many enjoyable cultural and artistic events.</p>
      <ul>
      <li><MunichInfo>The main soccer league known around Munich is the { munichLeague }.</MunichInfo></li>
      <li><MunichInfo>The main soccer team followed around Munich is { munichTeam }.</MunichInfo></li>
      <li><MunichInfo>Munich is a very safe place to go with a crime index of { munichCrime }.</MunichInfo></li>
      <li><MunichInfo>Outside of soccer, one of the best places to visit in Munich is the { munichSpot }.</MunichInfo></li>
      </ul>
      <MunichInfo2></MunichInfo2>
    <h2>_____________________________________________ </h2>
    <h2 className='neurope'>Northern Europe</h2>
      <h3 className='bold'>Copenhagen, Denmark </h3>
      <p>Rated one of the happiest places in the world, Copenhagen's canals and scenery provide anyone a colorful and unforgettable experience.</p>
      <ul>
      <li><CopenhagenInfo>The main soccer league known around Copenhagen is the { copenhagenLeague }.</CopenhagenInfo></li>
      <li><CopenhagenInfo>The main soccer team followed around Copenhagen are { copenhagenTeam }.</CopenhagenInfo></li>
      <li><CopenhagenInfo>Copenhagen is a very safe place to go with a crime index of { copenhagenCrime }.</CopenhagenInfo></li>
      <li><CopenhagenInfo>Outside of soccer, one of the best places to visit in Copenhagen is the { copenhagenSpot }.</CopenhagenInfo></li>
      </ul>
      <CopenhagenInfo2></CopenhagenInfo2>
      <h3 className='bold'>London, England </h3>
      <p>London is one of the few cities in the world that truly has it all. From a unique history, to modern architecture, London provides them a true taste of home while providing many new and unique cultural experiences.</p>
      <ul>
      <li><LondonInfo>The main soccer league known around London is the { londonLeague }.</LondonInfo></li>
      <li><LondonInfo>The main soccer teams followed around London are { londonTeam }.</LondonInfo></li>
      <li><LondonInfo>London is a safe place to go with a crime index of { londonCrime }.</LondonInfo></li>
      <li><LondonInfo>Outside of soccer, one of the best places to visit in London is the { londonSpot }.</LondonInfo></li>
      </ul>
      <LondonInfo2></LondonInfo2>
    <h2>_____________________________________________ </h2>
    <h2 className='seurope'>Southern Europe</h2>
      <h3 className='bold'>Barcelona, Spain </h3>
      <p>A city where metropolis meets nature, Barcelona's beautiful beaches and spectacular scenery often is a place high up on many people's vacation bucket lists.</p>
      <ul>
      <li><BarcelonaInfo>The main soccer league known around Barcelona is the { barcelonaLeague }.</BarcelonaInfo></li>
      <li><BarcelonaInfo>The main soccer team followed around Barcelona is { barcelonaTeam }.</BarcelonaInfo></li>
      <li><BarcelonaInfo>Barcelona is a safe place to go with a crime index of { barcelonaCrime }.</BarcelonaInfo></li>
      <li><BarcelonaInfo>Outside of soccer, one of the best places to visit in Barcelona is the { barcelonaSpot }.</BarcelonaInfo></li>
      </ul>
      <BarcelonaInfo2></BarcelonaInfo2>
      <h3 className='bold'>Naples, Italy </h3>
      <p>The home of pizza, Naples rugged appearance does not lack culture. Surrounded by some of the most picturesque areas in the world, Naples provides wonderful experiences for high quality food and shopping.</p>
      <ul>
      <li><NaplesInfo>The main soccer league known around Naples is the { naplesLeague }.</NaplesInfo></li>
      <li><NaplesInfo>The main soccer team followed around Naples is { naplesTeam }.</NaplesInfo></li>
      <li><NaplesInfo>Naples is not the absolute safest place to go with a crime index of {naplesCrime }.</NaplesInfo></li>
      <li><NaplesInfo>Outside of soccer, one of the best places to visit in Naples is the { naplesSpot }.</NaplesInfo></li>
      </ul>
      <NaplesInfo2></NaplesInfo2>
    <h2>_____________________________________________ </h2>
    <h2 className='nweurope'>Northwestern Europe</h2>
      <h3 className='bold'>Amsterdam, The Netherlands </h3>
      <p>Another one of the happiest places on earth, Amsterdam offers many beautiful canals that connect amazing resturaunts, shops, and coffee shops that make the destination a must visit.</p>
      <ul>
      <li><AmsterdamInfo>The main soccer league known around Amsterdam is the { amsterdamLeague }.</AmsterdamInfo></li>
      <li><AmsterdamInfo>The main soccer team followed around Amsterdam is { amsterdamTeam }.</AmsterdamInfo></li>
      <li><AmsterdamInfo>Amsterdam is a very safe place to go with a crime index of { amsterdamCrime }.</AmsterdamInfo></li>
      <li><AmsterdamInfo>Outside of soccer, one of the best places to visit in Amsterdam is the { amsterdamSpot }.</AmsterdamInfo></li>
      </ul>
      <AmsterdamInfo2></AmsterdamInfo2>
      <h3 className='bold'>Paris, France </h3>
      <p>A city known for romance, Paris has no lack of art, culture, and good cuisine. Many are able to spend weeks in the city and feel as if they could not get enough.</p>
      <ul>
      <li><ParisInfo>The main soccer league known around Paris is the { parisLeague }.</ParisInfo></li>
      <li><ParisInfo>The main soccer team followed around Paris is { parisTeam }.</ParisInfo></li>
      <li><ParisInfo>Paris is a safe place to go with a crime index of {parisCrime }.</ParisInfo></li>
      <li><ParisInfo>Outside of soccer, one of the best places to visit in Paris is the { parisSpot }.</ParisInfo></li>
      </ul>
      <ParisInfo2></ParisInfo2>
    <h2>_____________________________________________ </h2>
    </>
  );

  function NewResponse({ addResponse }) {
    
    return (
      <ul>
      {destinationState.destination_list.map((destination) => {
        return (
          <li className= { destination.added ? 'added' : 'notadded' } key={ `id${destination.list}`}>
            <input type='checkbox' checked={destination.added} onChange={ (evt) => addList(evt, destination) }></input>
            { destination.label } (<a href='dummy.html' onClick={(evt) => removeHandler(evt, destination.list)}>Remove</a>)
          </li>
        )
        }

      )}
    </ul>
    )
  };

  function NewDestination({ addDestination }) {
  
    return (
      <form onSubmit={addDestination}>
        <label>Add Destination Here:</label>
        <input type='text' id='destinationlabel' name='destinationlabel'></input>
        <input type='submit' value='Add'></input>
      </form>
    )
  };

  function DestinationList() {

    const destinationsCxt = useContext(DestinationContext);
    const { destinations } = destinationsCxt;

    return (
    <p>You have {destinations.length} cities on your list!</p>
    )
  };
}

export default App;
