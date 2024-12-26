import {useState} from 'react'

function List({contacts}) {
  const [filterText, setFilterText] = useState('');

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    )
  })


  return (
    <div>
      <input placeholder='Filter Contacts' value={filterText} onChange={(event) => setFilterText(event.target.value)}/>
      <ul className ="List">
        {
          filtered.map((contact,index) =>
          <li key = {index}>{contact.fullname} - {contact.phone_number}</li>
          )
        }
      </ul>
      <p>Total Contacts: {filtered.length} </p>
    </div>
  )
}

export default List;