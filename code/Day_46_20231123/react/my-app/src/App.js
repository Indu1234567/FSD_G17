import './App.css';
import MyFirstComponent from './MyFirstComponent';

function App() {
  let title = 'This is the title'
  let person = {
      name: 'Person 1',
      age: 30
  }

  let title2 = 'Second title'
  let person2 = {
    name: 'Person 2',
    age: 31
  }

  return (
    <div className="App">
      <h1>My first react app</h1>
      <hr />
      <MyFirstComponent myTitle={title} person={person} />
      <hr />
      <MyFirstComponent myTitle={title2} person={person2} />
    </div>
  );
}

export default App;
