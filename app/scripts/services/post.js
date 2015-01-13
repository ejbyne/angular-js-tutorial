'use strict';

app.factory('Post', function ($resource) {
  return $resource('https://https://luminous-torch-5265.firebaseio.com/posts/:id.json')
});