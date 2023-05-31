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


  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  })
    return !robots.length ? 
      <h1 className='tc'>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
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