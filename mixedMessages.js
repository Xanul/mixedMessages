function generateHobbitName() {
  let first = [
    "Adelard",
    "Bungo",
    "Seredic",
    "Mosco",
    "Ferdinand",
    "Fortinbras",
    "Malva",
    "Pearl",
    "Drogo",
    "Adalgrim",
    "Rose",
    "Belladona",
    "Estella",
    "Celandine",
    "Hildigrim",
    "Nob",
    "Salvia",
    "Rudigar",
    "Wilcome",
    "Pervina",
    "Balbo",
    "Falco",
    "Hob",
    "Otho",
    "Togo",
    "Myrtle",
  ];
  let middle = [
    "Bracegirdle",
    "Burrows",
    "Proudfoot",
    "Roper",
    "Greenhand",
    "Gardner",
    "Took",
    "Smallburrow",
    "Fairbairn",
    "Cotton",
  ];
  let end = [
    "Bree",
    "Hobbiton",
    "Hardbottle",
    "Crickhollow",
    "Frogmorton",
    "Bucklebury",
    "Woodhal",
    "Tuckborough",
    "Bywater",
    "Michel Delving",
  ];

  let firstIndex = Math.floor(Math.random() * first.length);
  let middleIndex = Math.floor(Math.random() * middle.length);
  let endIndex = Math.floor(Math.random() * end.length);

  console.log(
    `Your random Hobbit name is ${first[firstIndex]} ${middle[middleIndex]} ${end[endIndex]}`
  );
}
