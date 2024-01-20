import axios from 'axios'
import { useState, useEffect } from 'react'

const Home = () => {
    const [search, setSearch] = useState('')
    const [films, setFilms] = useState([])

    useEffect(()=>{
        const getFilms = async () => {
            const res = await axios.get('http://localhost:8000/api/film')
            setFilms(res.data)
        }
        getFilms()
    },[])

    const handleSearch = async e => {
        e.preventDefault()
        const res = await axios.get('http://localhost:8000/api/film/search/'+search)
        setFilms(res.data)
    }
    return (
    <div className='bg-slate-200 w-full'>
        <div className='w-full max-w-[1200px] p-5 mx-auto'>
            <h1 className='text-5xl text-center font-semibold pt-10 mb-5'>Available Films</h1>
            <div className='w-full flex items-center justify-center'>
                <form onSubmit={handleSearch} className='flex items-center justify-center mb-5'>
                    <input type="text" name='search' onChange={e=> setSearch(e.target.value)} placeholder='Search movie' className='border outline-none mx-auto py-1 px-3 text-xl w-full max-w-[500px] rounded-l-lg' required/>
                    <input type='submit' value='Search' className='bg-black rounded-r-lg self-center text-white py-1 px-2' />
                </form>
            </div>
            <div className='grid grid-cols-5 gap-5'>
                {films.map(film => (
                    <div key={film.title} className='shadow-md p-5 rounded-lg border-slate-500 bg-white'>
                        <h2 className='text-2xl font-semibold text-black'>{film.title}</h2>
                        <p className='text-slate-800 my-2'>{film.description}</p>
                        <h3 className='text-slate-400 font-bold'>{film.release_year}</h3>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Home