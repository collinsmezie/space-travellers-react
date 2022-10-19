/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissionData, joinMission, leaveMission } from '../redux/Missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions, loading } = useSelector((state) => state.missionReducer);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissionData());
    }
  }, []);

  return (
    <>
      {loading && <Spinner animation="border" />}

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Mission</th>
            <th className="table-width">Description</th>
            <th>Status</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {
                missions.map(
                  (mission) => (
                    <tr key={mission.mission_id}>
                      <td>
                        <strong>{mission.mission_name}</strong>
                      </td>
                      <td>
                        {mission.description}
                      </td>
                      <td className="center-text">
                        {
                            mission.mission_status ? <Badge bg="badgeActiveColor">Active Member</Badge> : <Badge bg="secondary">Not a Member</Badge>
                        }
                      </td>
                      <td className="center-text">
                        {
                            !mission.mission_status
                              ? <Button variant="outline-dark" onClick={() => dispatch(joinMission(mission.mission_id))}>Join Mission</Button>
                              : <Button variant="outline-danger" onClick={() => dispatch(leaveMission(mission.mission_id))}>Leave Mission</Button>
                        }

                      </td>
                    </tr>
                  ),
                )
            }
        </tbody>
      </Table>
    </>
  );
};

export default Missions;
