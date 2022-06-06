import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./Table.css"

const Table = () => {
    const [lists, setLists] = useState([])

    useEffect(() => {
        axios({
            url: 'https://jsonplaceholder.typicode.com/users'
        }).then((response) => {
            setLists(response.data);
            console.log(response);
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>username</th>
                        <th>adress</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {lists.map((item) => {
                                return (
                                    <div key={item.id}>
                                        <tr><td>{item.id}</td></tr>
                                    </div>

                                );
                            })}
                        </td>
                        <td>
                            {lists.map((item) => {
                                return (
                                    <div key={item.name}>
                                        <tr><td>{item.name}</td></tr>

                                    </div>

                                );
                            })}
                        </td>
                        <td>
                            {lists.map((item) => {
                                return (
                                    <div key={item.username}>
                                        <tr><td>{item.username}</td></tr>

                                    </div>

                                );
                            })}
                        </td>
                        <td>
                            {lists.map((item) => {
                                return (
                                    <div key={item.email}>
                                        <tr><td>{item.email}</td></tr>

                                    </div>

                                );
                            })}
                        </td>
                        <td>
                            {lists.map((item) => {
                                return (
                                    <div key={item.address}>
                                        <tr><td>{item.address.zipcode}</td></tr>  

                                    </div>

                                );
                            })}
                        </td>


                    </tr>
                    
                    
                    
                    
                </tbody>
            </table>


        </>
    )
}

export default Table