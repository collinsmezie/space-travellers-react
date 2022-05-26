import React, {useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { fetchMissionData, joinMission } from '../redux/Missions/missions';
import { useSelector, useDispatch } from 'react-redux';

const Missions = () => {
    const { missions, loading } = useSelector((state) => state.missionReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMissionData());
    }, [dispatch]);

    return (<Table striped bordered hover size="sm">
        <thead>
        <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
            {
                missions.map(
                    mission => <tr key={mission.mission_id}>
                    <td>
                        {mission.mission_name}
                    </td>
                    <td>
                        {mission.description}
                    </td>
                    <td>
                        {
                            mission.mission_status ? <Badge bg="success">Active Member</Badge> : <Badge bg="secondary">Not a Member</Badge>
                        }
                        
                    </td>
                    <td>
                        <Button variant="outline-dark" onClick={() => dispatch(joinMission(mission.mission_id))}>Join Mission</Button>
                    </td>
                </tr>)
            }
        </tbody>
        </Table>)
}

export default Missions