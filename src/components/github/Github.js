import React from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {
    const data = useLoaderData();
    // const [data,setData] = useState()
    // useEffect(() => {
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then(response => response.json())
    //     .then(data =>{
    //         setData(data);
    //     } )
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Guthub Followers : {data.followers}
    </div>
  )
}

export default Github;

export const gitHubInfo = async () => {
    const res =  await fetch("https://api.github.com/users/hiteshchoudhary");

    const data = await res.json();
    return data;
}
