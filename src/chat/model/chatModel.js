define([

], function (

) {

    var chatCollection = [
        {
            id: 1,
            name: 'Bob'
        },
        {
            id: 2,
            name: 'Alisa'
        },
        {
            id: 3,
            name: 'Jim'
        }
    ];

    return {
        oneById: function (id) {
            id = parseInt(id);
            for (var k in chatCollection) {
                if (chatCollection.hasOwnProperty(k)) {
                    var chatEntity = chatCollection[k];
                    if (chatEntity.id === id) {
                        return chatEntity;
                    }
                }
            }
            return null;
        },
        all: function () {
            return chatCollection;
        }
    };

});