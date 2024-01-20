import axios from 'axios'
import { useState, useEffect } from 'react'

const Actor = () => {
    const [search, setSearch] = useState('')
    const [actors, setActors] = useState([])

    useEffect(()=>{
        const getActors = async () => {
            const res = await axios.get('http://localhost:8000/api/actor')
            setActors(res.data)
        }
        getActors()
    },[])

    const handleSearch = async e => {
        e.preventDefault()
        const res = await axios.get('http://localhost:8000/api/actor/search/'+search)
        setActors(res.data)
    }
    return (
    <div className='bg-slate-200 w-full'>
        <div className='w-full max-w-[1200px] p-5 mx-auto'>
            <h1 className='text-5xl text-center font-semibold pt-10 mb-5'>Actors</h1>
            <div className='w-full flex items-center justify-center'>
                <form onSubmit={handleSearch} className='flex items-center justify-center mb-5'>
                    <input type="text" name='search' onChange={e=> setSearch(e.target.value)} placeholder='Search actor by name' className='border outline-none mx-auto py-1 px-3 text-xl w-full max-w-[500px] rounded-l-lg' required/>
                    <input type='submit' value='Search' className='bg-black rounded-r-lg self-center text-white py-1 px-2' />
                    
                    {/* demo populating select input with data from database */}
                    <select name="" id="" className='rounded-lg py-1 px-2'>
                        <option value=""></option>
                        {actors.map(actor => (
                            <option key={actor.id} value={`"${actor.id}"`}>{actor.first_name} {actor.last_name}</option>
                        ))}
                    </select>
                </form>
            </div>
            <div className='grid grid-cols-5 gap-5'>
                {actors.map(actor => (
                    <div key={actor.actor_id} className='shadow-md p-5 rounded-lg border-slate-500 bg-white'>
                        <h2 className=' font-semibold text-black'>{actor.first_name} {actor.last_name}</h2>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Actor