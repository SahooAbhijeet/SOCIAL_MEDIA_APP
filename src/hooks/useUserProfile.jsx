import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const useUserProfile = () => {
    const { userId } = useParams();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    async function getUserDetails() {
        const response = await axios.get(`https://dummyapi.io/data/v1/user/${userId}`, { headers: { "app-id": import.meta.env.VITE_APP_ID } });
        const json = await response.data;
        console.log(response);
        setUser({ ...json });
        console.log(json)
        setLoading(false);
    }
    useEffect(() => {
        getUserDetails();
    }, [])
  return {loading, user};
}

export default useUserProfile;