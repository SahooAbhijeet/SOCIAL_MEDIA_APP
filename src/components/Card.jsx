import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoriteBorderOutlined } from '@mui/icons-material';


function UserCard({ picture, firstName, text }) {
    const [isLiked, setisLiked] = React.useState(false);
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {firstName.substring(0, 1)}
                    </Avatar>
                }

                title={firstName}
                subheader="September 14, 2016"
            />
            {(picture.length > 0) ?
                (<CardMedia
                    component="img"
                    height="194"
                    image={picture}
                    alt="Paella dish"
                />) : null
            }

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {text}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={() => setisLiked(!isLiked)}>
                    {
                        (isLiked) ? <FavoriteIcon sx={{ color: red[500] }} /> : <FavoriteBorderOutlined />
                    }
                </IconButton>
            </CardActions>
        </Card>
    );
}
 export default React.memo(UserCard);

// Why we are using POSTAMN instead of webBrowser?
// Because browser only support get request whereas postman allows us to use differnt type of http request and in browser we cannot configure request-headers as app-id whereas postman allows us to do that.