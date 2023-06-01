$(`.search-button`).on(`click`, function(){
$.ajax({
  url: `http://www.omdbapi.com/?apikey=81fd2841&s=` + $(`.input-keyword`).val(),
  success: (result) => {
    const movies = result.Search;
    console.log(movies)
    let cards = "";
    movies.forEach((m) => {
      cards += showCards(m);
      $(`.movie-container`).html(cards);
    });
    // ketika tombol detail di-klik
    $(`.modal-detail-button`).on(`click`, function () {
        // console.log($(this).data(`imdbid`));
      $.ajax({
        url:`http://www.omdbapi.com/?apikey=81fd2841&i=` + $(this).data(`imdbid`),
        success: (m) => {
          // console.log(m);
          let movieDetail = showMovieDetail(m);
          $(`.modal-body`).html(movieDetail);
        },
        error: (e) => {
          console.log(e.responseText);
        },
      });
    });
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
})




function showCards(m) {
  return `<div class="col-md-3 my-5">
    <div class="card rounded-4">
      <img src="${m.Poster}" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">${m.Title}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${m.Year}</h6>
        <a href="#" class="btn btn-primary modal-detail-button"data-bs-toggle="modal"
        data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
      </div>
    </div>
  </div>`;
}

function showMovieDetail(m) {
  return `<div class="container-fluid">
     <div class="row">
       <div class="col-md-3">
         <img src="${m.Poster}" class="img-fluid" />
       </div>
       <div class="col-md">
         <ul class="list-group">
           <li class="list-group-item"><h4>${m.Title}(${m.Year})</h4></li>
           <li class="list-group-item">
             Director : <strong>${m.Director}</strong>
           </li>
           <li class="list-group-item">Actor : ${m.Actors}</li>
           <li class="list-group-item">Genre : ${m.Genre}</li>
           <li class="list-group-item">Plot : ${m.Plot}</li>
         </ul>
       </div>
     </div>
   </div>`;
}


