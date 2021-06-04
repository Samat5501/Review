import './App.css';
import Review from './Review';

function App() {
  return (
    <main>
      <div className='container'>
        <div className='title'>
          <h2 className='under'>Our reviews</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </div>
    </main>
  );
}

export default App;
