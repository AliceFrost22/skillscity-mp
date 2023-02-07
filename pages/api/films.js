// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const films=[
    { title: "Everything Everywhere All At Once", director: "Daniel Scheinert"},
    { title: "Precious", director: "NAyone"},
    { title: "LOTR", director: "Peter Jackson"}
];
  res.json(films);
}
