import React, { useEffect } from 'react';
import { fetchRocketData } from '../redux/Rockets/rockets';
import { useSelector, useDispatch } from 'react-redux';

const Rockets = () => {
    const { rockets, loading } = useSelector((state) => state.rocketsReducer);
    console.log(rockets)
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchRocketData());
    }, [dispatch]);
  
    let fetchedRockets = '';
    if (loading) {
        fetchedRockets = <h2>Hold on...</h2>;
    } else {
        fetchedRockets = rockets.map((rocket) => (
        <div
          key={rocket.id}
          className="container"
        >
        <img src="https://imgur.com/azYafd8.jpg" alt='rocket'></img>    
        <h2>{rocket.rocket_name}</h2>
        <p>{rocket.description}</p>
         
        </div>
  
      ));
    }
  
    return (
      <div>
          {fetchedRockets}
      </div>
    );
  };

export default Rockets