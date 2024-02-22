import { Provider } from 'react-redux';

import store from '@/stores/Store';

function App() {
  return (
    <Provider store={store}>
      <div>Hello !!!</div>
    </Provider>
  );
}

export default App;
