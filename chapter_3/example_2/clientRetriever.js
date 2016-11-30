var clientRetriever = (function() {
    var clients = dataProvider.getClients();
    return {
        getNewestClients : function(count) {
            return _.last(_.sortBy(clients, function(client) {
                return new Date(client.registered);
            }), count);
        },
        getOlderClients : function(skipLastCount) {
            return _.initial(_.sortBy(clients, function(client) {
                return new Date(client.registered);
            }), skipLastCount);
        }
    };
}());