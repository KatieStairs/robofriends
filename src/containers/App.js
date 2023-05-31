import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
// import ErrorBoundary from '../components/ErrorBoundary'; 
import './App.css';

function App() {
  //// Old Code:
  // constructor() {
  //   super()
  //   this.state = {
  //     robots: [],
  //     searchfield: ''
  //   }
  // }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response=> {
  //       return response.json();
  //   })
  //   .then(users => {
  //     this.setState({ robots: users })
  //   })
  // }

  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');
  const [count, setCount] = useState(0);


  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
      })
      .then(users => {
        setRobots(users)
      })
      console.log(count)
  },[count]) //Only run if count changes (disabling button so it don't send
            //for the whole array every time I press it)

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  })
    return !robots.length ? 
      <h1 className='tc'>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          {/* <button
            onClick={() =>
              setCount(count + 1)}
          >
            Click Me
          </button> //This was used to demonstrate more about the []
                    //At the end of useEffect */}
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            {/* <ErrorBoundary> */}
              <CardList robots={filteredRobots} />
            {/* </ErrorBoundary> */}
          </Scroll>
        </div>
        );
}

export default App;