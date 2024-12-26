import './App.css';
import { useState } from "react";


function App() {
  const [name, setName] = useState('Betül');
  const [age, setAge] = useState(21);
  const friend = ["İlayda Yalkın", " Selin Kalmuk"];
  const newFriend = ["Esra Çağman", " Esma Çağman"," Burak Salim"];
  const [friends, setFriends] = useState(friend);
  const [count, setCount] = useState(0);
  const [address, setAddress] = useState({title:'İstanbul',ilce: 'Gaziosmanpaşa',zipcode: 34255})

  console.log(age, name);

  return (

    <div className="App">
      <h1>Merhaba {name}</h1>
      <h3>Age {age}</h3>
      <h4>Friends: {
      friends.map((friend,index) =>
      <div key={index}>
        {index + 1} - {friend}
      </div>)}
      </h4>
      <button onClick={() => setName('Burak')} >Change Name</button>
      <p>name: {name} setName: Burak useState = default olan bir yapıdır.
        <br />Değişkene ilk verilen değerdir.
        <br />setName ise değişkenin değiştirilmiş değeridir.
        <br />setName değeri onClick olunca name değeri değişir.
      </p>
      <button onClick = {() => setAge(30)}>Change Age</button>

      <br /><br />

      {count < 1 && (
        <button  onClick={() => {
          setFriends([...friends, ...newFriend]);
          setCount(count + 1); // count'u güncelliyoruz
        }}
        >Friends</button>

      )}

      <hr/>
      <br />
      <h2>Address</h2>
      <div>{address.title} - {address.ilce} - {address.zipcode}</div>
      <button onClick={() => setAddress({...address, title: 'Ankara', zipcode: 55555})}>Change Address</button>
    </div>
  );
}
export default App;
