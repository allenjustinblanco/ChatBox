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

import {CTX} from './Store'

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
        width: '70%',
        height: '300px',
        padding: '20px'
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
    chip: {

    }
  }));
  

export default function Dashboard() {
    const classes = useStyles();

    //CTX store
    const {allChats, sendChatAction, user} = React.useContext(CTX);
    const topics = Object.keys(allChats)
    
    // local state
    const [textValue, changeTextValue] = React.useState('');
    const [activeTopic, changeActiveTopic] = React.useState(topics[0]);


    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h4" component="h4">
                    ChatBox
                </Typography>
                <Typography variant="h5" component="h5">
                    {activeTopic}
                </Typography>
                <div className={classes.flex}>
                    <div className={classes.topicsWindow}>
                        <List>
                            {
                                topics.map(topic => (
                                    <ListItem onClick={e => changeActiveTopic(e.target.innerText)} key={topic} button>
                                        <ListItemText primary={topic}/>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </div>
                    <div className={classes.chatWindow}>
                        {
                            allChats[activeTopic].map((chat, i) => (
                                <div className={classes.flex} key={i} >
                                    <Chip label={chat.from} className={classes.chip} />
                                    <Typography variant='body1'>{chat.msg}</Typography>
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
                        onChange={e => changeTextValue(e.target.value)}
                    />
                    <Button 
                        variant="contained" 
                        color="primary"
                        onClick={() => {
                            sendChatAction({from: user, msg: textValue, topic: activeTopic});
                            changeTextValue('');
                        }}
                    >
                        Send
                    </Button>
                </div>
            </Paper>
        </div>
    )
}