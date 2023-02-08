// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    const id=req.query.id; 
    // const {id}=req.query; DESCRUCTURED

    const films=[
      { id:"1", imgUrl:'https://m.media-amazon.com/images/M/MV5BNjBhNjk0MzMtOWRhMy00N2FkLTllZjgtMTBiYTI1YmZhNTFjXkEyXkFqcGdeQXVyMTM1MDExOTE2._V1_.jpg', title: "Everything Everywhere All At Once", director: "Daniel Scheinert,", linkToPurchase:"https://www.amazon.co.uk/Everything-Everywhere-All-At-Once/dp/B09HYDWBND"},
      { id:"2", imgUrl:'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg', title: "Pulp Fiction", director: "Quentin Tarantino", linkToPurchase:""},
      { id:"3", imgUrl:'https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg', title: "City of God", director: "Fernando Meirelles",  linkToPurchase:""},
      { id:"4", imgUrl:'https://m.media-amazon.com/images/M/MV5BYmZlZDZkZjYtNzE5Mi00ODFhLTk2OTgtZWVmODBiZTI4NGFiXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg', title: "Glass Onion", director: "Rian Johnson", linkToPurchase:""},
      { id:"5", imgUrl:'https://m.media-amazon.com/images/M/MV5BNjgwNjkwOWYtYmM3My00NzI1LTk5OGItYWY0OTMyZTY4OTg2XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg', title: "Portrait of a Lady on Fire", director: "Céline Sciamma", linkToPurchase:""},
      { id:"6", imgUrl:'https://images.mymovies.net/images/film/cin/350x522/fid21824.jpg', title: "The Banshees of Inisherin", director: "Martin McDonagh", linkToPurchase:""},
      { id:"7", imgUrl:'https://m.media-amazon.com/images/M/MV5BNDg4NjM1YjMtYmNhZC00MjM0LWFiZmYtNGY1YjA3MzZmODc5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_FMjpg_UX1000_.jpg', title: "Amélie", director: "Jean-Pierre Jeunet", linkToPurchase:""},
      { id:"8", imgUrl:'https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_.jpg', title: "Jurassic Park", director: "Steven Spielberg", linkToPurchase:""},
      { id:"9 ", imgUrl:'https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_.jpg', title: "Jurassic Park", director: "Steven Spielberg", linkToPurchase:""},

  ];

  const foundFilm =films.find((film)=>{
    if (film.id === id) {
        return true;
    }else{
        return false;
    }
  });

    res.json({film: foundFilm});
  }