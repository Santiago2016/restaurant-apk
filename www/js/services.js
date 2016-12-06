angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Lasaña',
    lastText: '3.00 CUC',
    face: 'img/lazana.jpg',
    detail: 'Lorem ipsum dolor sit amet, natoque per at morbi at vestibulum leo, velit non, curabitur ac est. Donec sit mollis imperdiet at tristique dapibus, qui vel in at fusce congue, mi arcu fusce'
  }, {
    id: 2,
    name: 'Enchilada de camarones',
    lastText: '4.00 CUC',
    face: 'img/enchilada.jpg',
    detail: 'Lorem ipsum dolor sit amet, natoque per at morbi at vestibulum leo, velit non, curabitur ac est. Donec sit mollis imperdiet at tristique dapibus, qui vel in at fusce congue, mi arcu fusce'
  }, {
    id: 3,
    name: 'Pizza napolitana',
    lastText: '1.50 CUC',
    face: 'img/pizza.jpg',
    detail: 'Lorem ipsum dolor sit amet, natoque per at morbi at vestibulum leo, velit non, curabitur ac est. Donec sit mollis imperdiet at tristique dapibus, qui vel in at fusce congue, mi arcu fusce'
  }, {
    id: 4,
    name: 'Espagueti napolitano',
    lastText: '2.00 CUC',
    face: 'img/espagueti.jpg',
    detail: 'Lorem ipsum dolor sit amet, natoque per at morbi at vestibulum leo, velit non, curabitur ac est. Donec sit mollis imperdiet at tristique dapibus, qui vel in at fusce congue, mi arcu fusce'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
