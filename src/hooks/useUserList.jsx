import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useUserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUserList();
    }, []);

    async function getUserList() {
        try {
            const response = await axios.get("https://dummyapi.io/data/v1/user", { headers: { "app-id": import.meta.env.VITE_APP_ID } });
            const json = await response.data;
            setUsers([...json.data]);
            // console.log(json.data);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    return { users };
}

export default useUserList