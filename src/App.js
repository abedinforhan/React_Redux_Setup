// we need a provider to prive store to the react components
import { Provider } from 'react-redux';
import CakeContainer from './components/CakeContainer';
// provider accepts a store as a  argument   , so that all the components can get data from provider
import store from './redux/store';


const centerStyle ={ textAlign: 'center' }

function App() {
  return (
    <Provider store={store}>
      <div  style={centerStyle}>
         <CakeContainer/>
      </div>
    </Provider> 
  );
}

export default App;
