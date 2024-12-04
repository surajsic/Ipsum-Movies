import axios from "axios";

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params:{
        api_key: '504f04c66e1f411d87f6d3c939f95f49',
    }
})