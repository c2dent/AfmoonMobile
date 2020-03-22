import axios from '../../apiAuth/axios';


export const addNewItem = (data) => {
    return() => {
        return axios.post('api/add-ad/', data)
            .then((response) => {
                return response
            })
    }
}