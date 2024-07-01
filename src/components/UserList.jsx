import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';

export default function UserList() {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        getUserList();
    }, []);

    async function getUserList() {
        try {
            const response = await axios.get("https://dummyapi.io/data/v1/user", { headers: { "app-id": import.meta.env.VITE_APP_ID } });
            const json = await response.data;
            setUsers([...json.data]);
            console.log(json.data);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    return (
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {users.map((user) => {
                const labelId = `checkbox-list-secondary-label-${user.id}`;
                return (
                    <ListItem
                        key={user.id}
                        disablePadding
                    >
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar
                                    alt={`Avatar n°${user.firstName}`}
                                    src={user.picture}
                                />
                            </ListItemAvatar>
                            <ListItemText id={labelId} primary={user.firstName + " " + user.lastName} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}
