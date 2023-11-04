import Header from '../src/components/Header'
import Content from '../src/components/Content'
import Sidebar from '../src/components/Sidebar'
import Footer from '../src/components/Footer'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header>
      </Header>
      <div className='container'>
      <Content>
      </Content>
      <Sidebar>
      </Sidebar>
      </div>
      <Footer>
      </Footer>
    </div>
  );
}

export default App;
