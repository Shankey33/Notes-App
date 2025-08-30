import { useState, useEffect} from 'react'

const Search = ({setSearchTerm}) => {
  const [searchTerm, setLocalSearchTerm] = useState('');

  useEffect(() => {
    setSearchTerm(searchTerm);
  }, [searchTerm, setSearchTerm]);

  return (
    <div className='search-container'>
        <input type="text" placeholder='Search notes...' value={searchTerm} onChange={e => setLocalSearchTerm(e.target.value)} />
    </div>
  )
}

export default Search
