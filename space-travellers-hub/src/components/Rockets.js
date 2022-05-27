import React, { useEffect } from 'react';
import { fetchRocketData } from '../redux/Rockets/rockets';
import { useSelector, useDispatch } from 'react-redux';
import { reserveRocket, cancelReservation } from '../redux/Rockets/rockets';
import Button from 'react-bootstrap/esm/Button';
import Stack from 'react-bootstrap/Stack'
import Image from 'react-bootstrap/Image'
import Badge from 'react-bootstrap/esm/Badge';



const Rockets = () => {
  const { rockets, loading } = useSelector((state) => state.rocketsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if(rockets.length === 0){
      dispatch(fetchRocketData());
    }
  }, [dispatch]);

  let fetchedRockets = '';
  if (loading) {
    fetchedRockets = <h2>Hold on...</h2>;
  } else {
    fetchedRockets = rockets.map((rocket) => (

      <div key={rocket.id}>
        <Stack direction="horizontal" gap={5}>

          <div className='img-container'>
            <Image fluid={true} src={rocket.images[1]} alt='rocket' />
          </div>
          <div className='description-container'>
            <h2>{rocket.name}</h2>
            {
              rocket.reserved ? <Badge bg="success">Reserved</Badge> : null
            }
            <p>{rocket.description}</p>

            {
              !rocket.reserved ?

                <Button variant="primary" type='button' onClick={() => dispatch(reserveRocket(rocket.rocketid))}>Reserve Rocket</Button>
                :
                <Button variant="light" type='button' id='btn' onClick={() => dispatch(cancelReservation(rocket.rocketid))}>cancel Reservation</Button>

            }
          </div>

        </Stack>
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