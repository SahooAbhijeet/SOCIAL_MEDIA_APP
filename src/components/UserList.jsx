import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import useUserList from '../hooks/useUserList';

export default function UserList() {

    const { users } = useUserList();

    return (
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {users.map((user) => {
                const labelId = `checkbox-list-secondary-label-${user.id}`;
                return (

                    <ListItem
                        key={user.id}
                        disablePadding
                    >
                        <Link className='links' to={`/user/${user.id}`}>
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar
                                        alt={`Avatar n°${user.firstName}`}
                                        src={user.picture}
                                    />
                                </ListItemAvatar>
                                <ListItemText id={labelId} primary={user.firstName + " " + user.lastName} />
                            </ListItemButton>
                        </Link>
                    </ListItem>

                );
            })}
        </List>
    );
}
