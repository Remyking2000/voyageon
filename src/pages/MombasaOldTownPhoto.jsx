import Photo from "./Photo.jsx";

export function MombasaOldTownPhoto() {
  return (
    <Photo
      src="/photos/commons/mombasa-old-town.jpg"
      alt="Carved wooden balconies on a Swahili house in Mombasa Old Town"
      width="1280"
      height="960"
    />
  );
}

export function MombasaOldTownCredit() {
  return (
    <small className="photo-credit">
      Photo by <a href="https://commons.wikimedia.org/wiki/File:Architecture_of_Swahili_house_in_Old_Town_Mombasa.JPG">Zahra Abdulmajid</a>
      {" · "}<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>
      {" · Resized and cropped for display"}
    </small>
  );
}
