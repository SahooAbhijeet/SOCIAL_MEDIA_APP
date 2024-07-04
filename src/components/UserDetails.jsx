import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import useUserProfile from '../hooks/useUserProfile';

const UserDetails = () => {

    const { user, loading } = useUserProfile();

    if (loading) {
        return <div> Loading ... </div>
    } else {
        return (
            <>
                <Card sx={{ display: 'flex' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                {user.firstName + " " + user.lastName}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                {user.email}
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        </Box>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 151, mb: '50px', mt: '20px' }}
                        image={user.picture}
                        alt="Live from space album cover"
                    />
                </Card>
            </>
        )
    }
}

export default UserDetails