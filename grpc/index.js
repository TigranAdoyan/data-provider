const grpc = require('@grpc/grpc-js');
const usersTransactions = require('./services/usersTransactions/index');

const services = [
    usersTransactions
];

class GrpcServer {
    constructor(grpc, services) {
        this.grpc = grpc;
        this.services = services;
    }

    async listen(PORT) {
        return new Promise((resolve, reject) => {
            try {
                this.server = new this.grpc.Server();

                this.attachServices();

                this.server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), () => {
                    this.server.start();
                    console.log(`Grpc Server running on the PORT => ${PORT}`);
                    resolve();
                });

                console.log(this.server);
            } catch (e) {
                reject(e)
            }
        });
    }

    attachServices() {
        this.services.forEach(({service, handler}) => {
            this.server.addService(service, handler);
        })
    }
}

module.exports = new GrpcServer(grpc, services);
