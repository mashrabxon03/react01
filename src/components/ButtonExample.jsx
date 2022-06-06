import React, { useState, useEffect} from "react";

const ButtonExample = () => {
    const [reSourcetype ,setResourceType] = useState('posts');
    const [item, setItem] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${reSourcetype}`)
        .then((res) => res.json())
        .then ((json) => setItem(json));
}, [reSourcetype]);

return (
    <div>
        <button onClick={() => setResourceType("posts")}>posts</button>
        <button onClick={() => setResourceType("users")}>users</button>
        <h3>{reSourcetype}</h3>
        {
            item.map((item) => {
                return (
                    <li key={item.id}>{JSON.stringify(item)}</li>
                )
            })
        }
    </div>
);
}

export default ButtonExample