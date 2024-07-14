import app from './app';
import { Config } from './config';

const startServer = () =>
{
    const PORT = Config.PORT
    try {
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
} catch (err) {
    console.error(`Error starting server: ${err}`);
    process.exit(1);
}
}
startServer()