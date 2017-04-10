app.factory('HtmlServices', function($http) {
  function action(onSuccess, onError){
    $http.post(baseurl+'templates/Html',
    {
      data:'action'
    }).
    then(function(response) {
      onSuccess(response);
    }, function(response) {
      onError(response);
    });
  }

  function autosave(onSuccess, onError){
    $http.post(baseurl+'templates/autosave')
    .then(function(response) {
      onSuccess(response);
    }, function(response) {
      onError(response);
    });
  }

  return {
    action: action,
    autosave:autosave
  }
});