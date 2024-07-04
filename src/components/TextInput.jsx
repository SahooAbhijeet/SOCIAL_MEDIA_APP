import { LoadingButton } from '@mui/lab';
import { Box, Button, TextField } from '@mui/material'
import useTextInput from '../hooks/useTextInput';

const TextInput = () => {
    const {
        setUserInput,
        setImageUrl,
        createUserPost,
        imageUrl,
        userInput,
        loading,
    } = useTextInput();

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
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
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