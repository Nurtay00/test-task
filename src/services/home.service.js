import api from './api.service'

class HomeService{
    privatUrl ='?i=tt3896198&apikey=8523cbb8'
    getCards(data){
        return api.get(`${this.privatUrl}&&${data}`)
    }
}

export const homeService = new HomeService()