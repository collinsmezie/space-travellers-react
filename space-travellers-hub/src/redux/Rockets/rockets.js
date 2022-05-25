

const LOADED = 'LOADED';
const LOADING = 'LOADING';
const ERROR = 'ERROR';

const BUTTON_PRESSED = 'BUTTON_PRESSED';
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

// const buttonAction = (data) => ({
//     type: BUTTON_PRESSED,
//     payload: data
// })

const getRocketId = (id) => ({
    type: BUTTON_PRESSED,
    payload: id
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
        data.forEach((item) => {
                rocketData.push({
                    id: item.id,
                    name: item.rocket_name, 
                    type: item.engine.type,
                    flickr_images: item.flickr_images
                });
          
        });

        // const array = [] 
        // rocketData.forEach(item => {
        //     array.push({
        //         id: item.id,
        //         name: item.rocket_name, 
        //         type: item.engine.type,
        //         flickr_images: item.flickr_images
        //     })
            
    // })

        // console.log("line 51",array) 
        
        dispatch(loadCompletedAction(rocketData));
      })
      .catch((error) => {
        dispatch(errorAction(error.message));
      });
  };


export const fetchRocketId = (id) => (dispatch) => {
    dispatch(loadingAction());
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        let rocketId = "";
        data.forEach((key) => {
            if (key.rocket_id === id){
                rocketId = key.rocket_id
                console.log(rocketId)
          }
        });
        
        dispatch(getRocketId(rocketId));
      })
      .catch((error) => {
        dispatch(errorAction(error.message));
      });
  };







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
        case BUTTON_PRESSED: 
        const newState = state.map(rocket => {
            if(rocket.id !== id) 
                return rocket;
            return { ...rocket, reserved: true };
        });

        default:
            return state
    }

}


export default rocketsReducer