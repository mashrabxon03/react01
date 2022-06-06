import React,{useState, useEffect} from 'react';
import axios from 'axios';

const FakeExample = () => {
    const[list, setLists,] = useState([])

    useEffect(() => {
       axios ({
           url: 'https://jsonplaceholder.typicode.com/posts'
       }).then((response) => {
           setLists(response.data);
           console.log(response)
       }).catch((err) => {
           console.log(err)
       })
    },[setLists])
    return(
         <div>
        <div>
            {list.map((item) => {
                return (
                    <div key={item.id}>
                        <li>{item.title}</li>
                        <p>{item.body}</p>
                        
                        </div>
                )
            })

            }
        </div>
    </div>
    );
}

export default FakeExample;