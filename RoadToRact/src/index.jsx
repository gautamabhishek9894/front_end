import axios from 'axios';
async function apiCall() {
    let data =await axios.get('https://jsonplaceholder.typecode.com/users');
    let res=await data.data;
    console.log(res);
    
}
apiCall();