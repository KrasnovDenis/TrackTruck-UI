import axios from "axios";
import {HOST_URL} from "../application-config.json";

const URL = `${HOST_URL}/api/messages/`;

class MessageRepo {

    async sendMessage(recipient, text) {
        try {

            const requestBody = {
                senderId: localStorage.getItem("userId"),
                recipientId: recipient,
                text: text
            };

            let response = await axios.post(`${URL}send`, requestBody)

            if (response.status === 200) {
                return response.data;
            }

        } catch (e) {
            console.log(e)
        }
    }

    async getMessagesForAllUsers() {
        return await axios.post(`${URL}load/all`)
    }

    async getMessagesForUser(userId) {
        return await axios.post(`${URL}load/${userId}`)
    }

}


export default new MessageRepo();