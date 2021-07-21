import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addUser } from '../Service/api';
import { useHistory } from 'react-router-dom';

const initialValue = {
    title: '',
    description: '', 
    date: new Date(),
}



const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const AddUser = () => {

    const [user, setUser] = useState(initialValue);
    const { title , description , date} = user;
    const classes = useStyles();
    let history = useHistory();
    // let currDate= new Date();
    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value })
    }

    const addUserDetails = async() => {
        // setUser({...user,})
        await addUser(user);
        history.push('./all');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add Post</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Title</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='title' value={title} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Description</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='description' value={description} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => {addUserDetails()
                }}>Add Post</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddUser;