import chalk from 'chalk';
import express from 'express';
import { Request, Response } from 'express';
import GoogleOAuthToJWT from './GoogleOAuthToJWT';

const app = express();
const port = 1270;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/:access_token?', async (req: Request, res: Response) => {
    try {
        const access_token = req.params.access_token;
        const tokenId = await GoogleOAuthToJWT(access_token);
        res.status(200).send(tokenId);

    } catch(err){
        res.status(401).send({ message: "Your access_token can't be processed. Might be invalid or expired." });
    }
});

app.listen(port, () => {
    console.log(`${chalk.green('Google OAuth to JWT')} is running at http://localhost:${port}`);
});

export default app;