import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import GraphicsRepo from "../../repository/GraphicsRepo";

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});


function Row(props) {
    const {row} = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>
                </TableCell>
                <TableCell>
                    {row.name}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                Описание
                            </Typography>

                            <Table size="small" aria-label="purchases">
                                <TableBody>
                                    <TableRow key={row.name}>
                                        <TableCell align="left">{row.description}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.arrayOf(
            PropTypes.shape({
                description: PropTypes.string.isRequired,
            }),
        ).isRequired
    }).isRequired,
};

class CollapsibleTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: []
        }
    }


    componentDidMount = async () => {
        try {
            const url = window.location.pathname;
            const carId = url.substr(url.lastIndexOf('/') + 1);

            await GraphicsRepo.getErrors(
                [carId],
                this.props.data.dateFrom,
                this.props.data.dateTo)
                .then(r => this.setState({errors: r}))
        } catch (rejectedValue) {
            alert(rejectedValue);
            console.log(rejectedValue);
        }
    }

    render() {
        return (
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell size="small"/>
                            <TableCell>
                                Коды ошибок
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            (this.state.errors && this.state.errors.length > 0)
                                ? this.state.errors.map((error) => (
                                    <Row key={error.name} row={error}/>))
                                :  <Row key={"stub"} row={{
                                    name: "ошибок не обнаружено",
                                    description: ""
                                }}/>
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default CollapsibleTable