import './searchBar.styles.scss'
import searchIcon from '../../assets/icons/searchIcon.svg'

const SearchBar = ({search, setSearch}) =>{
    return <div className={'searchBar-wrapper'}>
        <input onChange={el=>setSearch(el.target.value)} value={search}/>
        <img src={searchIcon} alt={'search icon'} className={'search-icon'}/>
    </div>

}
export default SearchBar