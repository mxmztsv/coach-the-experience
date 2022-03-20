import {BASE_URL} from "../configs/Api";

export const submitForm = async (data) => {
    // console.log('data to send', data)
    try {
        // const response = await fetch(`${BASE_URL}/book`, {
        const response = await fetch(`${BASE_URL}/book`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        }).then(async (response) => {
                if (!response.ok) {
                    throw new Error(response.message || 'Something went wrong during http request')
                } else {
                    const json = await response.json()
                    return json.message
                }

        })

        return response

    } catch (e) {
        console.log(e.message)
        throw e
    }


}
