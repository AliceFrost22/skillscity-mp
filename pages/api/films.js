// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const films=[
    { id:"1", imgUrl:'https://m.media-amazon.com/images/M/MV5BNjBhNjk0MzMtOWRhMy00N2FkLTllZjgtMTBiYTI1YmZhNTFjXkEyXkFqcGdeQXVyMTM1MDExOTE2._V1_.jpg', title: "Everything Everywhere All At Once", director: "Daniel Scheinert", linkToPurchase:"https://www.amazon.co.uk/Everything-Everywhere-All-At-Once/dp/B09HYDWBND"},
    { id:"2", imgUrl:'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg', title: "Pulp Fiction", director: "Quentin Tarantino",linkToPurchase:""},
    { id:"3", imgUrl:'https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg', title: "City of God", director: "Fernando Meirelles", linkToPurchase:""},
    { id:"4", imgUrl:'', title: "", director: "", linkToPurchase:""},
    { id:"5", imgUrl:'', title: "", director: "", linkToPurchase:""},
    { id:"6", imgUrl:'', title: "", director: "", linkToPurchase:""},
    { id:"7", imgUrl:'', title: "", director: "", linkToPurchase:""},
    { id:"8", imgUrl:'', title: "", director: "", linkToPurchase:""},


];
  res.json(films);
}
