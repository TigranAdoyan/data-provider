const path = require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const protoPath = path.join(__dirname, '/proto/index.proto');

const handler = require("./handler");

const usersTransactionsDefinition = protoLoader.loadSync(protoPath, {});
const grpc_package = grpc.loadPackageDefinition(usersTransactionsDefinition).usersTransactions;

module.exports = {
    handler,
    service: grpc_package.usersTransactions.service
};
