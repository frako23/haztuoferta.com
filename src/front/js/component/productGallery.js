import React from "react";

const myGallery = cloudinary.galleryWidget({
  container: "#my-gallery",
  cloudName: "demo",
  mediaAssets: [{ tag: "clock" }], // by default mediaType: "image"
});

return <div id="my-gallery" style="max-width:80%"></div>;

myGallery.render();

export default CloudinaryGalleryWidget;
