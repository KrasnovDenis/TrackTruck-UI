import React from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
    createStyles({
        messageRow: {
            display: "flex"
        },
        messageRowRight: {
            display: "flex",
            justifyContent: "flex-end"
        },
        messageBlue: {
            position: "relative",
            marginLeft: "20px",
            marginBottom: "10px",
            padding: "10px",
            paddingBottom: "20px",
            backgroundColor: "#A8DDFD",
            width: "60%",
            minWidth:"150px",
            textAlign: "left",
            font: "400 .9em 'Open Sans', sans-serif",
            border: "1px solid #97C6E3",
            borderRadius: "10px",
            "&:after": {
                content: "''",
                position: "absolute",
                width: "0",
                height: "0",
                borderTop: "15px solid #A8DDFD",
                borderLeft: "15px solid transparent",
                borderRight: "15px solid transparent",
                top: "0",
                left: "-15px"
            },
            "&:before": {
                content: "''",
                position: "absolute",
                width: "0",
                height: "0",
                borderTop: "17px solid #97C6E3",
                borderLeft: "16px solid transparent",
                borderRight: "16px solid transparent",
                top: "-1px",
                left: "-17px"
            }
        },
        messageOrange: {
            position: "relative",
            marginRight: "20px",
            marginBottom: "10px",
            padding: "10px",
            backgroundColor: "#f8e896",
            width: "60%",
            minWidth:"150px",
            //height: "50px",
            textAlign: "left",
            font: "400 .9em 'Open Sans', sans-serif",
            border: "1px solid #dfd087",
            borderRadius: "10px",
            "&:after": {
                content: "''",
                position: "absolute",
                width: "0",
                height: "0",
                borderTop: "15px solid #f8e896",
                borderLeft: "15px solid transparent",
                borderRight: "15px solid transparent",
                top: "0",
                right: "-15px"
            },
            "&:before": {
                content: "''",
                position: "absolute",
                width: "0",
                height: "0",
                borderTop: "17px solid #dfd087",
                borderLeft: "16px solid transparent",
                borderRight: "16px solid transparent",
                top: "-1px",
                right: "-17px"
            }
        },

        messageContent: {
            padding: 0,
            margin: 0
        },
        messageTimeStampRight: {
            color: "#655959",
            position: "absolute",
            fontSize: ".85em",
            fontWeight: "400",
            marginTop: "10px",
            bottom: "5px",
            right: "10px"
        },
        displayName: {
            marginLeft: "20px"
        }
    })
);

export const MessageLeft = (props) => {
    const message = props.message.text ? props.message.text : "no message";
    const date = props.message.date ? new Date(props.message.date) : new Date()
    let options = {month: 'long', day: 'numeric'}
    const timestamp = date.toLocaleDateString("ru-RU", options) + ' ' + date.toLocaleTimeString()
    const displayName = props.displayName ? props.displayName : "Пользователь";
    const classes = useStyles();
    return (
        <>
            <div className={classes.messageRow}>
                <div>
                    <div className={classes.displayName}>{displayName}</div>
                    <div className={classes.messageBlue}>
                        <div>
                            <p className={classes.messageContent}>{message}</p>
                        </div>
                        <div className={classes.messageTimeStampRight}>{timestamp}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export const MessageRight = (props) => {
    const classes = useStyles();
    const message = props.message.text ? props.message.text : "no message";
    const date = props.message.date ? new Date(props.message.date) : new Date()
    let options = {month: 'long', day: 'numeric'}
    const timestamp = date.toLocaleDateString("ru-RU", options) + ' ' + date.toLocaleTimeString()
    return (
        <div className={classes.messageRowRight}>
            <div className={classes.messageOrange}>
                <p className={classes.messageContent}>{message}</p>
                <div className={classes.messageTimeStampRight}>{timestamp}</div>
            </div>
        </div>
    );
};
