import './card.styles.scss'
import invalidImg from './../../assets/images/invalidImg.png'

const Card = ({data}) => {

    function addDefaultSrc(ev){
        ev.target.src = invalidImg
    }
    return <div className={'card-wrapper'}>
        <img src={data.Poster} onError={addDefaultSrc} alt={data.Title} className={'card-img-wrapper'}/>
        <div>
            <div>Name: {data.Title}</div>
            <div>Year: {data.Year}</div>
            <div>imdbID: {data.imdbID}</div>
            <div>Type: {data.Type}</div>
        </div>
    </div>
}

export default Card