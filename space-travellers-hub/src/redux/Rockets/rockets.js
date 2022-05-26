
const LOADED = 'LOADED';
const LOADING = 'LOADING';
const ERROR = 'ERROR';
const RESERVATION = 'RESERVATION';
const CANCEL_RESERVATION = 'CANCEL_RESERVATION'
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

export const cancel_reservation = (id) => ({
    type: CANCEL_RESERVATION,
    payload: id
})

export const reserveRocket = (id) => ({
    type: RESERVATION,
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

            const rocketData = [];
            data.forEach((item) => {
                rocketData.push({
                    id: item.id,
                    name: item.rocket_name,
                    description: item.description,
                    images: item.flickr_images,
                    rocketid: item.rocket_id,
                });

            });

            dispatch(loadCompletedAction(rocketData));
        })
        .catch((error) => {
            dispatch(errorAction(error.message));
        });
};


const rocketsReducer = (state = initialState, action) => {

    switch (action.type) {
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
            };
        case RESERVATION:
            const reserve = state.rockets.map(rocket => {
                if (action.payload === rocket.rocketid) {
                    console.log("payload", rocket.rocketid, action.payload)
                

                    return { ...rocket, reserved: true };
                }

                return rocket

            });
        
            case CANCEL_RESERVATION:
                const cancel = state.rockets.map(rocket => {
                    if (action.payload === rocket.rocketid) {
                        return { ...rocket, reserved: false };
                    }
    
                    return rocket
    
                });

        default:
            return state
    }

}


export default rocketsReducer