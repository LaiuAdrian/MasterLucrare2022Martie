import rootReducer from './index';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'; 
import { persistStore} from 'redux-persist';


const middleware = applyMiddleware(thunkMiddleware);

export const store = createStore(rootReducer,middleware);

export const persistor = persistStore(store);