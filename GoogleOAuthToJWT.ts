import axios from 'axios';
import jwt from 'jsonwebtoken';

async function GoogleOAuthToJWT(access_token: string){
    try {
        const { data } = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: { 
                Authorization: `Bearer ${access_token}` 
            }
        });

        const token = jwt.sign(data, 'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2');
        return { tokenId: token }

    } catch(err){
        console.log(err);
        throw new Error('Failed to get JWT token from access_token');
    }
}

export default GoogleOAuthToJWT;