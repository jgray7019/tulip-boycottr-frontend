import { combineReducers } from 'redux';
import { boycottLocations } from './boycottReducer';
import { googleMapsReducer } from './googleMapsReducer';
import { reducer as formReducer } from 'redux-form';
<<<<<<< HEAD
 
export const rootReducer = combineReducers({
    boycottLocations,
    googleMaps: googleMapsReducer,
    form: formReducer,
=======
import { boycottModalReducer } from './boycottModalReducer';

export const rootReducer = combineReducers({
    boycottLocations,
    googleMaps: googleMapsReducer,
    modal: boycottModalReducer,
    form: formReducer
>>>>>>> afd9c02ff5d0101949e8cc412957e103c7797413
});
