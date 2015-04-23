$(document).ready(function() {

  getAllArtworks(function(artworks){
    console.log(artworks);
    for (i=0, x=1; i<artworks.length; i++, x++) {
      if (x%3 == 0) {
        $('.artworks').append('<div class="col-sm-4 artwork-item"> \
          <a href="artworks.html?id='+artworks[i]._id+'"> \
            <img class="img-responsive" src="assets/artworks/'+artworks[i].img_url+'" alt=""> \
          </a> \
          <p> \
            <span class="artwork-name">'+artworks[i].name+'</span><br> \
            <em> \
              <span class="artist-name">'+artworks[i].artist+'</span>, <span class="artwork-year">'+artworks[i].year+'</span> \
            </em><br> \
            <span class="artwork-medium">'+artworks[i].medium+'</span> \
            <span class="price text-right">$ '+artworks[i].price+'</span> \
          </p> \
        </div> \
        <div class="clearfix visible-sm-block visible-md-block visible-lg-block"></div>'
        );
      } else {
        $('.artworks').append('<div class="col-sm-4 artwork-item"> \
            <a href="artworks.html?id='+artworks[i]._id+'"> \
              <img class="img-responsive" src="assets/artworks/'+artworks[i].img_url+'" alt=""> \
            </a> \
            <p> \
              <span class="artwork-name">'+artworks[i].name+'</span><br> \
              <em> \
                <span class="artist-name">'+artworks[i].artist+'</span>, <span class="artwork-year">'+artworks[i].year+'</span> \
              </em><br> \
              <span class="artwork-medium">'+artworks[i].medium+'</span> \
              <span class="price text-right">$ '+artworks[i].price+'</span> \
            </p> \
          </div>' 
        );
      }
    }
  });

});