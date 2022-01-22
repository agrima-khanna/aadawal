import React, { useState } from "react";
import axios from "axios";
// import "../styles/gallery.css";

export function ImageUpload({
  year,

  setImagesDatabase,
  displayImgs,
  setProgress,
}) {
  const [galleryImg, setGalleryImage] = useState([]);
  const onFileChange = (e) => {
    var arr = [];
    for (var i = 0; i < e.target.files.length; i++) {
      arr.push(e.target.files[i]);
      // console.log(e.target.files[i]);
    }
    console.log(arr);
    setGalleryImage(arr);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    // formData.append("galleryImg", JSON.stringify(galleryImg));
    formData.append("year", year);
    galleryImg.map((file) => {
      formData.append("galleryImg", file);
    });
    var flag = 0;

    axios
      .post("/image/upload", formData, {
        onUploadProgress: (pe) => {
          if (pe.loaded == pe.total) setProgress(false);
          else setProgress(true);
        },
      })
      .then((res) => {
        // console.log(res.data.success);
        if (res.data.success) displayImgs(year, setImagesDatabase, setProgress);
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="upload">
        <input
          className="inputFile"
          type="file"
          accept="image/*"
          onChange={onFileChange}
          multiple
        />

        <button className="uploadBtn" type="submit">
          Upload Image(s)
        </button>
      </div>
    </form>
  );
}
