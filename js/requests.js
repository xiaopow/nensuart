// $(document).ready(function() {

  function Request() {
    this.type = '';
    this.url = '';
    this.data = {};
    this.dataType = 'json';
    this.success = function(response){
    }
  };

  //--------------- Artworks -----------------

  function getAllArtworks(callback) {
    var newRequest = new Request();
    newRequest['type'] = 'GET';
    newRequest['url'] = 'http://localhost:3000/artworks';
    newRequest['success'] = function(response){
      return callback(response);
    };

    $.ajax(newRequest);
  };

// });