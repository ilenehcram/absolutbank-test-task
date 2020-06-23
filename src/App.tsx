import React from 'react';
import { Provider } from 'react-redux';
import createStore from './stores/rootStore';
import TasksPage from './views/pages/TasksPage';

function App() {
  const store = createStore();
  return (
    <Provider store={store}>
      <TasksPage />
    </Provider>
  );
}

export default App;
