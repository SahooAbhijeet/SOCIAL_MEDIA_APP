import React, { useEffect, useState } from 'react'
import MainContainer from './MainContainer'
import Navbar from './Navbar'
import TextInput from './TextInput'
import PostCardContext from '../providers/PostProvider';
import axios from 'axios';
const SocialApp = () => {

  const [posts, setPosts] = useState([]);
  console.log(posts)
    useEffect(() => {
        getUserPosts();
    }, []);

    async function getUserPosts() {
        try {
            const response = await axios.get("https://dummyapi.io/data/v1/post", { headers: { "app-id": import.meta.env.VITE_APP_ID } });
            const json = await response.data;
            setPosts([...json.data]);
            console.log(import.meta.env.VITE_APP_ID)
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
  return (
    <div>
      <PostCardContext.Provider value={ {posts, setPosts} }>
        <Navbar />
        <TextInput />
        <MainContainer />
      </PostCardContext.Provider>
    </div>
  )
}

export default SocialApp

/*
* First of all we will create the create context where all the content will be there like a store and then wherever i will pass the context/data within that component i will wrap inside this </PostContext.Provider> component. Here i want that i should pass all the data into my socialapp so i wrapped into it. Whatever data i want to share i will pass a value prop to this Provider component as a object . As here i created a state variable of posts and pass to the value prop.
* Now I want to consume the data in the main container of the child that is post card list component so we will replace the useState with useContext hook as there useState is local to the postcardlist component but we have made it global in the contextprovider so we will update that. Similar update will be there i the rest of the component  also.
 */