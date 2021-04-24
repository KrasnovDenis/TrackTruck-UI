import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ParkRepo from "../../repository/ParkRepo";
import {DateTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import MapChart from "./maps/MapChart";

const useStyles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 400,
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
});


class CarItemsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            parks: [],
            carMarker: [],
            carTrace: [],
            dateFromInput: false,
            dateToInput: false
        }
    }

    async componentDidMount() {
        const userId = localStorage.getItem("userId");
        await ParkRepo
            .getAllParksByOwner(userId)
            .then((response) => (
                this.setState({parks: response.data})))
    }

    onSelectCar(e) {
        //    todo: здесь сделать 2 вещи
        //    1. Сходить в influx и попытаться взять положение машины от current_data (если нет, то метку не ставить вообще)
        //    2. Сходить в influx и взять НЕ ВСЕ точки-координаты GPS
    }

    handleDateFromChange = (e) => {
        this.setState({dateFrom: new Date(e).getTime()});
    }

    handleDateToChange = (e) => {
        this.setState({dateTo: new Date(e).getTime()});
    }

    onChangeShowCurrentTime = (e) => {
        console.log(e.target.checked)
        if (e.target.checked) {
            this.setState({
                dateFromInput: true,
                dateToInput: true,
            })
        } else {
            this.setState({
                dateFromInput: false,
                dateToInput: false,
            })
        }
    }

    render() {
        const {classes} = this.props;
        let parks = this.state.parks;

        return (

            <Row>
                <Col>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Form>
                            <FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" onChange={this.onChangeShowCurrentTime}/>
                                        Показывать текущее положение
                                    </Label>
                                </FormGroup>
                                <br/>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            Дата начала
                                            <DateTimePicker
                                                disabled={this.state.dateFromInput}
                                                value={this.state.dateFrom}
                                                onChange={this.handleDateFromChange}/>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            Дата конца
                                            <DateTimePicker
                                                disabled={this.state.dateToInput}
                                                value={this.state.dateTo}
                                                onChange={this.handleDateToChange}/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <List className={classes.root} subheader={<li/>}>
                                    {parks.map((park) => (
                                        <li key={`section-${park.name}`} className={classes.listSection}>
                                            <ul className={classes.ul}>
                                                <ListSubheader>{park.name}</ListSubheader>
                                                {park.cars.map((car) => (
                                                    <ListItem button key={`item-${park.name}-${car.id}`}
                                                              onClick={() => {
                                                                  this.onSelectCar(car.id)
                                                              }}>
                                                        <ListItemText primary={car.model}/>
                                                    </ListItem>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </List>
                            </FormGroup>
                        </Form>
                    </MuiPickersUtilsProvider>
                </Col>
                <Col>
                    <MapChart data={{
                        marker: this.state.carMarker,
                        trace: this.state.carTrace
                    }}/>
                </Col>
            </Row>
        );
    }
}

export default withStyles(useStyles,
    {
        withTheme: true
    }
)(CarItemsList);

