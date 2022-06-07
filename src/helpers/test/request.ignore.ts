import axios from 'axios'

export const reqJest = async (url: string, method: string, data?: any) => {
    const sendData = { url: `${url}`, method, data }
    const resp = await axios(sendData)
    return resp
}
