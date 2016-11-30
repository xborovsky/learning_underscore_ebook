var clientRetriever = (function() {
    var clients = dataProvider.getClients();
    return {
        getOldestClients : function(count) {
            return _.first(_.sortBy(clients, function(client) {
                return new Date(client.registered);
            }), count);
        },
        getNewerClients : function(skipFirstCount) {
            return _.rest(_.sortBy(clients, function(client) {
                return new Date(client.registered);
            }), skipFirstCount);
        }
    };
}());