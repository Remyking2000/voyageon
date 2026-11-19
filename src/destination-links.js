export const destinationsPath = "/destinations/index.html";

function place(name, slug) {
  return { name, slug, path: "/destinations/" + slug + ".html" };
}

export const destinationGroups = [
  {
    id: "safari",
    name: "Safari",
    path: "/destinations/safari.html",
    places: [
      place("Maasai Mara", "maasai-mara"),
      place("Amboseli", "amboseli"),
      place("Nairobi National Park", "nairobi-national-park"),
      place("Tsavo East & Tsavo West", "tsavo"),
    ],
  },
  {
    id: "coast",
    name: "Coast",
    path: "/destinations/coast.html",
    places: [
      place("Mombasa", "mombasa"),
      place("Kilifi", "kilifi"),
      place("Diani Beach", "diani"),
      place("Watamu & Malindi", "watamu-malindi"),
      place("Lamu", "lamu"),
    ],
  },
  {
    id: "rift-valley",
    name: "Rift Valley",
    places: [
      place("Lake Naivasha & Hell’s Gate", "naivasha"),
      place("Lake Nakuru National Park", "nakuru"),
    ],
  },
  {
    id: "highlands",
    name: "Central highlands",
    places: [
      place("Nanyuki & Ol Pejeta", "nanyuki"),
      place("Mount Kenya", "mount-kenya"),
      place("Aberdares", "aberdare"),
    ],
  },
  {
    id: "western-kenya",
    name: "Western Kenya",
    places: [
      place("Kisumu & Lake Victoria", "kisumu"),
      place("Kakamega Forest", "kakamega"),
    ],
  },
  {
    id: "northern-kenya",
    name: "Northern Kenya",
    places: [
      place("Samburu", "samburu"),
      place("Lake Turkana", "turkana"),
    ],
  },
];

export const destinations = destinationGroups.flatMap(group => group.places);
