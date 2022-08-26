import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/prices'>Prices</Link>
      <Link to='/agenda'>Agenda</Link>
    </div>
  )
}

export default Header
