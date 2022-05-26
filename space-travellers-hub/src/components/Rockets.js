import React, { useEffect } from 'react';
import { fetchRocketData, fetchRocketId } from '../redux/Rockets/rockets';
import { useSelector, useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/Rockets/rockets';

const Rockets = () => {
    const { rockets, loading } = useSelector((state) => state.rocketsReducer);
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
        <img src={rocket.images[0]} alt='rocket'></img>    
        <h2>{rocket.name}</h2>
        <p>{rocket.description}</p>
        <button type='button' onClick={() => dispatch(reserveRocket(rocket.rocketid))}>Reserve Rocket</button>
         
        </div>
  
      ));
    }
    
    return (
      <div>
          {fetchedRockets}
        {console.log(rockets)}
      </div>
    );
  };

export default Rockets