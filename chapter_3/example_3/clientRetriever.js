var clientRetriever = (function() {
    var clients = dataProvider.getClients();
    return {
        getOldestOrBestClients : function(count) {
            var oldestClients = _.first(_.sortBy(clients, function(client) {
                return new Date(client.registered);
            }), count);
            var bestClients = _.last(_.sortBy(clients, function(client) {
                return client.bikePoints;
            }), count);
            
            return _.union(oldestClients, bestClients);
        }
    };
}());