import React from 'react'

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles( theme => ({
    root: {
        margin: '50px',
        padding: theme.spacing(3,2),
    },
    flex: {
        display: 'flex',
        alignItems: 'center'
    },
    chatWindow: {
        width: '70%'
    },
    topicsWindow: {
        width: '30%',
        height: '300px',
        borderRight: '1px solid grey'
    },
    chatBox: {
        width: '85%',
        padding: '20px'
    },
    button: {
        width: '15%'
    },
  }));
  

export default function Dashboard() {
    const classes = useStyles();

    const [textValue, changeTextValue] = React.useState('');

    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h4" component="h4">
                    ChatBox
                </Typography>
                <Typography variant="h5" component="h5">
                    Sheet of Paper
                </Typography>
                <div className={classes.flex}>
                    <div className={classes.topicsWindow}>
                        <List>
                            {
                                ['topic'].map(topic => (
                                    <ListItem key={topic} button>
                                        <ListItemText primary={topic}/>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </div>
                    <div className={classes.chatWindow}>
                        {
                            [{from: 'user', msg: 'hello'}].map((chat, i) => (
                                <div className={classes.flex} key={i} >
                                    <Chip label={chat.from} className={classes.chip} />
                                    <Typography variant='p'>{chat.msg}</Typography>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={classes.flex}>
                    <TextField 
                        label="Send a chat"
                        className={classes.chatBox}
                        value={textValue}
                        onChange={() => (changeTextValue('name')}
                    />
                    <Button variant="contained" color="primary">
                        Send
                    </Button>
                </div>
            </Paper>
        </div>
    )
}