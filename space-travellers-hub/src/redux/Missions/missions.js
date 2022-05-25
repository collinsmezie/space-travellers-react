const LOADED = 'LOADED';
const LOADING = 'LOADING';
const ERROR = 'ERROR';
const URL = 'https://api.spacexdata.com/v3/missions'


const loadingAction = () => ({
    type: LOADING,
})

const errorAction = (error) => ({
    type: ERROR,
    payload: error
})
const loadMissionAction = (data) => ({
    type: LOADED,
    payload: data
})

const initialState = {
  missions: [],
  loading: false,
  error: null

};

export const fetchMissionData = () => (dispatch) => {
    dispatch(loadingAction());
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        // console.log(data)
        const missionData = [];
        data.forEach((mission) => {  
            missionData.push({
                mission_id: mission.mission_id,
                mission_name:mission.mission_name,
                description: mission.description,
                mission_status: 'Not A Member'
            });
        });
        dispatch(loadMissionAction(missionData));
      })
      .catch((error) => {
        dispatch(errorAction(error.message));
      });
  };


const missionReducer = (state = initialState, action) => {

    switch(action.type){
        case LOADING:
            return {
                ...state,
                loading: true,
            }
        case ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        
        case LOADED:
            return {
                ...state,
                loading: false,
                missions: action.payload
            }

        default:
            return state
    }

}


export default missionReducer