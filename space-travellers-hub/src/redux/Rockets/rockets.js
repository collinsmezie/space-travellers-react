

const LOADED = 'LOADED';
const LOADING = 'LOADING';
const ERROR = 'ERROR';
const URL = 'https://api.spacexdata.com/v3/rockets'


const loadingAction = () => ({
    type: LOADING,
})

const errorAction = (error) => ({
    type: ERROR,
    payload: error
})
const loadCompletedAction = (data) => ({
    type: LOADED,
    payload: data
})


const initialState = {
  rockets: [],
  loading: false,
  error: null

};

export const fetchRocketData = () => (dispatch) => {
    dispatch(loadingAction());
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        const rocketData = [];
        data.forEach((key) => {
            if (key) {
                rocketData.push(key);
          }
        });
        dispatch(loadCompletedAction(rocketData));
      })
      .catch((error) => {
        dispatch(errorAction(error.message));
      });
  };


//fetchRocketData()





const rocketsReducer = (state = initialState, action) => {

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
                rockets: action.payload
            }

        default:
            return state
    }

}


export default rocketsReducer