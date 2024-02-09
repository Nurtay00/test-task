import SearchBar from "../SearchBar";
import logo from '../../assets/images/logo.png'
import userIcon from "../../assets/icons/userIcon.svg";
import './header.styles.scss'

const Header = ({setSearch, search}) => {
    return <div className={'header-wrapper'}>

        <img src={logo} alt={'logo'} className={'header-logo'}/>

        <SearchBar setSearch={setSearch} search={search}/>
        <div className={'user-menu'}>
            <img src={userIcon} alt={'user-icon'}/> <span  className={'user-name'}>Your Name</span>
        </div>
    </div>
}

export default Header