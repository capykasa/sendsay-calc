import '../scss/app.scss';

import { Provider } from 'react-redux';
import Main from './Main';
import { store } from '../store/reducers/store';

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

export default App;
