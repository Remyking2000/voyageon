export const destinationsPath = "/destinations/index.html";

export const destinationGroups = [
  {
    name: "Safari",
    path: "/destinations/safari.html",
    places: [
      { name: "Maasai Mara", path: "/destinations/maasai-mara.html" },
      { name: "Amboseli", path: "/destinations/amboseli.html" },
      { name: "Nairobi National Park", path: "/destinations/nairobi-national-park.html" },
    ],
  },
  {
    name: "Coast",
    path: "/destinations/coast.html",
    places: [
      { name: "Mombasa", path: "/destinations/mombasa.html" },
      { name: "Kilifi", path: "/destinations/kilifi.html" },
    ],
  },
];

export const destinations = destinationGroups.flatMap(group => group.places);
