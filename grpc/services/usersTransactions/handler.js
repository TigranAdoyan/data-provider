
const handler =  {
    GetUsersTransactions: ( call, callback ) => {
        console.log('Request Data is a');
        console.log(call.request);

        callback(null, {
            project: call.request.project,
            totalCount: 1000,
            totalAmount: 2000
        });
    }
};


module.exports = handler;
