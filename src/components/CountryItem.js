import './CountryItem.css'

function CountryItem({ item }) {
  return (
    <div className='card' key={item.id}>
      <img src={item?.flag} alt='' />
      <h3>{item?.name}</h3>
    </div>
  )
}

export default CountryItem
