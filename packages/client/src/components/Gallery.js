import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "../styles/gallery.css";
import { GoToTop, ImageUpload, Login } from ".";
import axios from "axios";
import { confirm } from "react-confirm-box";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function getYears(n) {
  var current = new Date().getFullYear();
  var years = [];
  for (var i = 0; i < n; i++) years.push(current - i);
  return years;
}

const deleteImage = async (
  myRef,
  activeYear,
  imagesDatabase,
  setImagesDatabase,
  setProgress
) => {
  console.log(myRef.current.getCurrentIndex());
  const result = await confirm("Are you sure?");
  if (!result) {
    return;
  }

  var index = myRef.current.getCurrentIndex();
  var imagesNew = imagesDatabase.images;
  console.log(index);

  axios
    .post("http://localhost:5000/image/delete/" + imagesNew[index].id)
    .then((res) => {
      console.log(res.data.success);
      if (res.data.success) {
        displayImgs(activeYear, setImagesDatabase, setProgress);
      }
    });
};
const displayImgs = (activeYear, setImagesDatabase, setProgress) => {
  axios
    .get("http://localhost:5000/image/", {
      params: {
        year: activeYear,
      },
      onDownloadProgress: (pe) => {
        if (pe.loaded == pe.total) setProgress(false);
        else setProgress(true);
      },
    })
    .then((res) => {
      const imgs = res.data.images;
      console.log(res.data.images);
      var imagesNew = [];

      imgs.map((img, i) => {
        imagesNew.push({
          original: "http://localhost:5000/image/" + img.filename,
          thumbnail: "http://localhost:5000/image/" + img.filename,
          id: img.id,
          originalHeight: "400px",
        });
        setImagesDatabase({ images: imagesNew, flag: 1 });
        // });
      });
      if (imgs.length == 0) setImagesDatabase({ images: imagesNew, flag: 1 });
    });
};
export function Gallery({ editAllowed }) {
  const [activeYear, setActiveYear] = useState(new Date().getFullYear());
  const [imagesDatabase, setImagesDatabase] = useState({
    images: [],
    flag: 0,
  });
  const [progress, setProgress] = useState(false);
  const years = getYears(4);
  const switchYear = (year) => {
    setActiveYear(year);
    setImagesDatabase({ images: [], flag: 0 });
  };
  const myRef = React.createRef();
  useEffect(() => {
    displayImgs(activeYear, setImagesDatabase, setProgress);
  }, [activeYear]);

  if (imagesDatabase.flag === 0) return null;
  return (
    <div className="gallery">
      <div className="yearsNav">
        <div
          style={{
            color: "white",
            textAlign: "center",
            borderBottom: "solid 0.5px white",
            paddingTop: "10px",
            paddingBottom: "10px",
            fontSize: "24px",
          }}
        >
          Years
        </div>
        {years.map((year) => {
          return (
            <button
              onClick={() => {
                if (activeYear != year) switchYear(year);
              }}
              className={`yearNavBtn ${
                activeYear === year ? "yearNavBtnActive" : ""
              }`}
            >
              {year}
            </button>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingBottom: "24px",
          gap: "8px",
        }}
      >
        {editAllowed && imagesDatabase.images.length > 0 && (
          <button
            className="deleteBtn"
            onClick={() =>
              deleteImage(
                myRef,
                activeYear,
                imagesDatabase,
                setImagesDatabase,
                setProgress
              )
            }
          >
            Delete This Image
          </button>
        )}
        <div className="galleryDiv">
          {progress && (
            <>
              <div>Loading...</div>
              <CircularProgress />
            </>
          )}

          {imagesDatabase.images.length > 0 && (
            <ImageGallery
              items={imagesDatabase.images}
              thumbnailPosition="right"
              showBullets="true"
              ref={myRef}
            />
          )}
          {imagesDatabase.images.length == 0 && (
            <div style={{ fontWeight: "bold" }}>No images</div>
          )}
        </div>

        {editAllowed && (
          <ImageUpload
            year={activeYear}
            setImagesDatabase={setImagesDatabase}
            displayImgs={displayImgs}
            setProgress={setProgress}
          />
        )}
        {/* <Login editAllowed={editAllowed} setEditAllowed={setEditAllowed} /> */}
      </div>
      <GoToTop />
    </div>
  );
}
