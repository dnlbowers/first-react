// import logo from './logo.svg';
import './App.css';
// import FunctionalGreeting from "./components/FunctionalGreetings";
// import FunctionalGreetingWithProps from "./components/FunctionalGreetingsWithProps";
// import StatefulGreeting from "./components/StatefulGreeting";
// import StatefulGreetingWithCallback from "./components/StatefulGreetingWithCallback";
// import StatefulGreetingWithPrevState from "./components/StatefulGreetingWithPrevState";
// import EventsClass from "./components/EventsClass";
// import EventsFunctional from "./components/EventsFunctional";
import EventBinding from "./components/EventBinding";
function App() {
  return (
    <div className="App">
        {/*<FunctionalGreeting />*/}
        {/*<FunctionalGreetingWithProps greeting="nice to meet you!" name="Mike" age="32" />*/}
        {/*<StatefulGreeting greeting="I'm a stateful class component" name="David"/>*/}
        {/*<StatefulGreetingWithPrevState />*/}
        {/*<EventsFunctional/>*/}
        {/*<EventsClass/>*/}
        <EventBinding/>
    </div>


  );
}

export default App;
