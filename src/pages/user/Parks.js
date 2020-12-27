import React, {Component} from "react";
import {SideBar} from "../../components/SideBar";
import {setUpSideBar} from "./PrivateArea";
import ParkLabel from "../../components/customer/ParkLabel";
import "../../style/components/customer/Vehicle.css";
import ParkRepo from "../../repository/ParkRepo";

//это список парков
class Parks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parkIds: [],
            parkNames:[]
        }
    }

    componentDidMount() {
        let userId = "9ba18258-4560-11eb-b378-0242ac130002" // localStorage.getItem("userId")
        ParkRepo.getAllParksNames(userId).then((response) => {
            this.setState({
                parkNames: response.data
            })
        })
        ParkRepo.getAllParksIds(userId).then((response) => {
            this.setState({
                parkIds: response.data
            })
        })
    }


    render() {
        return (
            <div className="content-customer">
                <SideBar menuItems={setUpSideBar()}/>
                {
                    this.state.parkNames.forEach(park1 => <ParkLabel park={park1}/>)
                }
            </div>
        )
    }
}

export default Parks


function getParkInfoStub() {
    return {
        id: "1",
        owner: "ООО Зеленоглазое Такси",
        name: "Парк сокольники"
    };
}