import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import { fetchMissionData } from '../redux/Missions/missions';
import { fetchRocketData } from '../redux/Rockets/rockets';

const Profile = () => {
    const { missions} = useSelector((state) => state.missionReducer);
    const { rockets } = useSelector((state) => state.rocketsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (missions.length === 0)
            dispatch(fetchMissionData());

        if (rockets.length === 0)
            dispatch(fetchRocketData());
    }, []);

    const filteredMissions = missions.filter(mission => mission.mission_status === true);
    const filteredRockets = rockets.filter(rocket => rocket.reserved === true);
    return (
        <div className="flexy">
        {missions.length === 0 && <p>There are no Missions to display!</p>}
            <div>
                <h3>My Missions</h3>
                <ListGroup>
                    {
                        filteredMissions.length === 0 && (<p>Nobody has joined any mission!</p>)
                    }
                    {
                        filteredMissions.map(filteredMission => {
                            return <ListGroup.Item key={filteredMission.mission_id} className="filter-width" >{filteredMission.mission_name}</ListGroup.Item>
                        })
                    }
                </ListGroup>
            </div>

        {rockets.length === 0 && <p>There are no Rockets to display!</p>}
        <div>
            <h3>My Rockets</h3>
            <ListGroup>
                {
                    filteredRockets.length === 0 && (<p>No Rocket reservations yet!</p>)
                }
                {
                    filteredRockets.map(filteredRocket => {
                        return <ListGroup.Item key={filteredRocket.id}>{filteredRocket.name}</ListGroup.Item>
                    })
                }
            </ListGroup>
        </div>
        </div>
    );
}

export default Profile