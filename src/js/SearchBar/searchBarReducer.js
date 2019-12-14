  const defaultState = {
    city: null,
    history: [],
};

export default function searchBarReducer(state = defaultState, action) {
    const { type, payload } = action;
    console.log(payload)
    switch (type) {
        case "GET_WEATHER_PENDING": {
            return state;
        }
        case "GET_WEATHER_FULFILLED": {
            return {
                city: payload,  
                history: [...state.history, payload.data.name],
            }
        }
        default: {
            return state;
        }
    }
}