import CryptoJS from 'crypto-js'
const AES = {
    key: true,
    encode: (str, key)=>{
        return CryptoJS.AES.encrypt(str, key).toString()
    },
    decode: (signed, key)=>{
        return CryptoJS.AES.decrypt(signed, key).toString(CryptoJS.enc.Utf8)
    },
}

export default{
    AES
}
