import { LoadingButton } from '@mui/lab';
import { Box, Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const TextInput = () => {
    const [userInput, setUserInput] = useState("");
    const [userPost, setUserPost] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        createUserPost();
    }, []);

    async function createUserPost() {
        setLoading(true);
        const response = await axios.post("https://dummyapi.io/data/v1/post/create",
            {
                owner: "60d0fe4f5311236168a109d5",
                text: userInput,
                image: userPost,
                likes: 0,
                publishDate: new Date()
            },
            {
                headers: {
                    "app-id": import.meta.env.VITE_APP_ID
                }
            }
        );
        const json = await response.data;
        console.log(json);
        setLoading(false);
        setUserInput("");
        setUserPost("");

    }
    return (

        <Box>
            <TextField
                fullWidth
                id='outlined-basic'
                sx={{ mt: '1rem' }}
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                label="Add New Post"
            />

            <TextField
                fullWidth
                id='outlined-basic'
                sx={{ mt: '1rem' }}
                value={userPost}
                onChange={(e) => setUserPost(e.target.value)}
                label="Image for your post"
            />
            {
                (!loading) ? <Button
                    variant="contained"
                    sx={{ mt: '1rem', ml: "5px" }}
                    onClick={createUserPost}
                >
                    Submit
                </Button> : <LoadingButton loading variant='outlined'>Submit</LoadingButton>
            }
        </Box>
    )
}

export default TextInput