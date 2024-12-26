import Header from './components/Header';
import User from './components/User';
import './App.css';



const name = "Betül";
const surname = "Salim";
const isLoggedIn = true;
const age = 21;

const friends = [
  {
    name : 'İlayda',
    surname: 'Yalkın'
  },{
    name: 'Selin',
    surname: 'Kalmuk'
  }
]
const familyMembers = [
  {
    Role: 'Baba',
    name: 'İbrahim',
    surname : 'Salim'
  },
  {
    Role: 'Anne',
    name: 'Nesrin',
    surname : 'Salim'
  },
  {
    Role: 'Erkek Kardeş',
    name: 'Burak',
    surname : 'Salim'
  },
  {
    Role: 'Ben',
    name: 'Betül',
    surname : 'Salim'
  }
]

function  App() {
  return(
    <div>
      <h1>Hello React</h1>
      <Header/>
      <hr/>
      <p className = "xyz">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        <br/> animi ipsam voluptatem laudantium, adipisci, aperiam sequi nesciunt odio,
        <br/> numquam sapiente tempora assumenda corporis dolorem esse perspiciatis deserunt cum earum tempore?</p>
      <label htmlFor="myinput">
        Name:
        <input id="myinput"/>
      </label>

      <h1>{name} - {surname}</h1>
      <h1>{`Benim Adım: ${name} ${surname}`}</h1>

      <h1>
        {isLoggedIn && `Hoşgeldin ${name} ${surname}`}
        {!isLoggedIn && `Giriş Yapılamadı`}
          <hr/>
        {isLoggedIn
        ? `Benim Adım ${name}, soyadım ${surname}`
        : "Giriş Yapmadınız"  }

      </h1>
      <User
      name = {name}
      surname = {surname}
      //isLoggedIn = {isLoggedIn}
      age = {age}
      friends= {friends}
      familyMembers = {familyMembers}
      address = {{
        title: 'Ataşehir/İstanbul',
        zip: 34755
      }}
      />

    </div>
  );
}
export default App;