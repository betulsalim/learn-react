import PropTypes from "prop-types";


function User({name, surname, isLoggedIn, age, friends, familyMembers, address}) {


  return(
      <div>Selam
      <hr/>
      <h1>
        {

          `${name}  ${surname}`
        }
      </h1>

        {
          isLoggedIn ?
        ` Yaşınız: (${age})`
          : "Giriş Yapmadınız"
        }
        <hr/>
        <h2>Address:</h2>
        {address.title} {address.zip}
        <h2>Arkadaşlar:</h2>
        {
          friends.map((friend, index) => (
            <div key = {index}>
              {index + 1} - {friend.name} {friend.surname}
            </div>
          ))
        }
        <hr/>
        <h2>Aile Üyeleri</h2>
        {
          familyMembers.map((member,index) => {
            return <div key={index}> {index + 1} - {member.Role} : {member.name} {member.surname} </div>
            })
        }
      </div>
  )
}

User.propTypes = {
  name: PropTypes.string.isRequired,        // Zorunlu ve string olmalı
  surname: PropTypes.string.isRequired,     // Zorunlu ve string olmalı
  isLoggedIn: PropTypes.bool.isRequired,    // Zorunlu ve boolean olmalı
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,         //isRequired: Zorunlu oneOfTypes: birden fazla veri türü kabul
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,    // Her bir friend'in name alanı zorunlu
      surname: PropTypes.string.isRequired, // Her bir friend'in surname alanı zorunlu
    })
  ).isRequired,                             // friends bir dizi olmalı ve zorunlu
  familyMembers: PropTypes.arrayOf(
    PropTypes.shape({
      Role: PropTypes.string.isRequired,    // Her bir familyMember'in Role alanı zorunlu
      name: PropTypes.string.isRequired,    // Her bir familyMember'in name alanı zorunlu
      surname: PropTypes.string.isRequired, // Her bir familyMember'in surname alanı zorunlu
    })
  ).isRequired,
  address: PropTypes.shape({
    title: PropTypes.string,
    zip: PropTypes.number
  })
};


//User.defaultProps = {
  //isLoggedIn: false
//}

export default User;