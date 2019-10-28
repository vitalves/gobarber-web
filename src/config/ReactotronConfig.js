import Reactotron from 'reactotron-react-js';

// Redux + Saga
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    // redux
    .use(reactotronRedux())
    .use(reactotronSaga())
    // end redux
    .connect();

  tron.clear();

  console.tron = tron;
}
