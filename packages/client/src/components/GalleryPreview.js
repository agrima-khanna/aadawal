import { useState, useEffect } from "react";
import { Slideshow } from ".";
import { NavLink } from "react-router-dom";
import axios from "axios";
function getYears(n) {
  var current = new Date().getFullYear();
  var years = [];
  for (var i = 0; i < n; i++) years.push(current - i);
  return years;
}
const displayImgs = (activeYear, setImagesDatabase) => {
  axios.post("/gallery/image/display/" + activeYear).then((res) => {
    const imgs = res.data.images;
    console.log(res.data.images);
    var imagesNew = [];
    if (imgs)
      imgs.map((img, i) => {
        // axios
        //   .get("http://localhost:3000/image/filename", {
        //     params: {
        //       filename: img,
        //     },
        //   })
        //   .then((res) => {
        //     console.log(res);
        imagesNew.push("/gallery/image/" + img.filename);
        setImagesDatabase({ images: imagesNew, flag: 1 });
        // });
      });
    if (!imgs || imgs.length == 0)
      setImagesDatabase({ images: imagesNew, flag: 1 });
  });
};
export function GalleryPreview() {
  const [activeYear, setActiveYear] = useState(new Date().getFullYear());
  const [imagesDatabase, setImagesDatabase] = useState({
    images: [],
    flag: 0,
  });

  useEffect(() => {
    displayImgs(activeYear, setImagesDatabase);
  }, [activeYear]);

  const years = getYears(4);
  const switchYear = (year) => {
    setActiveYear(year);
    setImagesDatabase({ images: [], flag: 0 });
  };
  if (imagesDatabase.flag === 0) return null;
  return (
    <div className="galleryPreview">
      <div className="galleryPreviewHeader"> Photo Gallery</div>
      <div className="yearBtns">
        {years.map((year, i) => {
          return (
            <button
              key={i}
              onClick={() => {
                if (year != activeYear) switchYear(year);
              }}
              className={`yearBtn ${
                activeYear === year ? "yearBtnActive" : ""
              }  `}
            >
              {year}
            </button>
          );
        })}
      </div>
      <div className="imgPreview">
        <Slideshow
          images={imagesDatabase.images}
          properties={{ indicators: true, duration: 2000, arrows: false }}
        />
      </div>

      <NavLink
        style={{ alignSelf: "center" }}
        className="goToGallery"
        to="/gallery"
      >
        Go To Gallery
      </NavLink>
    </div>
  );
}
