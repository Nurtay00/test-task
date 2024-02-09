import {useEffect, useState} from "react";
import {homeService} from "../../services/home.service";
import Header from "../../components/Header";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination/Pagination";
import './home.styles.scss'
import Loader from "../../components/Loader/Loader";
import Empty from "../../components/Empty/Empty";

const Home = () => {

    const [list, setList] = useState([])
    const [search, setSearch] = useState('')
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        const handler = setTimeout(() => {
            homeService.getCards(`s=${search}&page=${page}`).then(data => {
                if (data.data.Search) {
                    setList(data.data.Search)
                    setTotal(data.data.totalResults)
                } else {
                    setList([])
                    setTotal(0)
                    setPage(1)
                }
                setLoading(false)

            })
        }, 1000)

        return () => {
            clearTimeout(handler);
        };
    }, [search,page])

    const Content = () => {
        if (loading) {
            return <div className={'wrp-center'}> <Loader/></div>
        } else {
            return total===0 ? <Empty/>: <div style={{width:'100%'}}>
                <div className={'info-wrp'}>You searched for: <span className={'info-search'}>{search}</span>
                    <span className={'number-wrp'}>{total}</span>
                </div>
                <div className={'home-page-cards'}>
                    {list.map(el => <Card data={el}/>)}
                </div>
                <div className={'wrp-center'}>  <Pagination total={total} page={page} setPage={setPage}/></div>


            </div>
        }

    }

    return <div className={'home-page-wrapper'}>
        <Header setSearch={setSearch} search={search}/>
        <Content/>
    </div>
}

export default Home