import config from "./clientcfg.json";
import Slayer from 'slayer07';

const worker = new Slayer.SlayerWorker(config.workerId, config.clientToken, config.clientId);
worker.login(worker.worker_token);

worker.once('ready', () => {
    console.log(`Worker ${worker.worker_id} ready!!!`);
    console.log(`Worker Token ${worker.worker_token}`);
    console.log(`Worker discord ID ${worker.worker_discord_id}`);
    console.log(`Worker listening at port: ${config.port}`);
});

worker.listen(config.port);