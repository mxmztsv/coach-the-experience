import {BASE_URL} from "../configs/Api";

export const submitForm = async (data) => {
    console.log('data to send', data)
    const response = await fetch(`${BASE_URL}/book`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
        // body: JSON.stringify({"name": "test"})
    })
    return await response.json()
}
