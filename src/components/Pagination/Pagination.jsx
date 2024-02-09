import arrowLeft from '../../assets/icons/arrowLeft.svg'
import arrowRight from '../../assets/icons/arrowRight.svg'
import './pagination.styles.scss'

const Pagination = ({total, page, setPage}) => {

    const arr = [];
    for (let i = page - 3; i < page + 3; i++) {
        arr.push(i)
    }


    return <div className={'pagination-wrapper'}>
        <div className={'arrow-left'} onClick={()=>setPage(page - 1)}>
            <img src={arrowLeft} alt={'arrow left'}/>
        </div>
        <div className={'cell'} onClick={()=>setPage(1)}>1</div>
        {page > 3 ? <div className={'cell'}>...</div> : null}


        {arr.map(el => {
            if (el > 0) {
                return <div key={el} className={'cell'} onClick={()=>setPage(el + 1)}>{el + 1}</div>
            } else {
                return null
            }
        })}

        {page < total - 3 ? <div className={'cell'}>...</div> : null}

        <div className={'cell'} onClick={()=>setPage(Math.ceil(total / 10))}>{Math.ceil(total / 10)}</div>
        <div className={'arrow-right'} onClick={()=>setPage(page + 1)}>
            <img src={arrowRight} alt={'arrow right'}/>
        </div>

    </div>
}

export default Pagination