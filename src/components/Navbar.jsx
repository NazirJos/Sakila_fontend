import { Link, NavLink } from 'react-router-dom'
import { BiSolidMoviePlay } from 'react-icons/bi'

const Navbar = () => {
  return (
    <header>
        <nav className='bg-black text-white w-full h-[70px]'>
            <div className='w-full max-w-[1200px] flex h-full mx-auto px-5 items-center justify-between'>
                <Link to="/" className="flex items-center">
                    <BiSolidMoviePlay size={25} />
                    <span className='ml-3 font-semibold text-lg'>Sakila Movie Rental</span>
                </Link>
                <div className='flex items-center gap-5'>
                    <NavLink to={'/'} className={({ isActive }) => isActive ? 'font-bold' : ''}>
                        <span>Home</span>
                    </NavLink>
                    <NavLink to={'/actor'} className={({ isActive }) => isActive ? 'font-bold' : ''}>
                        <span>Actors</span>
                    </NavLink>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar