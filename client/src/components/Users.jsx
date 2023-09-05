import { useState, useEffect } from 'react'
import axios from 'axios'

const Users = () => {
    const server = 'http://localhost:5050'
    const [usr, setUsr] = useState([{}])

    const getUsers = async () => {
        const res = await axios(`${server}/getusr`)
        const data = await res.data.data
        // console.log(data)
        setUsr(data)
    }
    useEffect(() => {
        getUsers()
    }, [])

  return (
    <>
        <div className="usrdtls">
            <table border={1}>
                <thead>
                    <tr>
                        <th>Phone Number</th>
                        <th>User Name</th>
                        <th>Email Id</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (usr.length>0) ? usr.map((elm, i) => (
                            <tr key={i}>
                                <td>{elm.user_phone}</td>
                                <td>{elm.user_name}</td>
                                <td>{elm.user_email}</td>
                            </tr>
                        )) : null
                    }
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Users