const INITIAL_STATE = {
    data: [],
    loading: false,
    error: false,
    singleAnimal: []
};

export default function todos(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'REQUEST_ALL_ANIMALS':
            return { ...state, loading: true };
        case 'SUCCESS_ALL_ANIMALS':
            return { data: action.payload.data, loading: false, error: false };
        case 'FAILURE_ALL_ANIMALS':
            return { data: [], loading: false, error: true };

        case 'SUCCESS_SINGLE_ID':
            return { ...state, singleAnimal: action.payload.data };
        default:
            return state;
    }
}