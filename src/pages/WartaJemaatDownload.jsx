import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const WartaJemaatDownload = () => {
  const [judul, setJudul] = useState("");
  const [file, setFile] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [title, setTitle] = useState("");
  const [preview, setPreview] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getWartaJemaatById();
  }, []);

  const getWartaJemaatById = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_GET_API}/wartajemaat/${id}`
    );
    setTitle(response.data.title);
    setFile(response.data.file);
    setPreview(response.data.url);

    console.log(response.data);
  };

  const loadImage = (e) => {
    const document = e.target.files[0];
    setFile(document);
    setPreview(URL.createObjectURL(document));
  };

  return (
    <div>
      {/* <p>{title}</p> */}
      <iframe
        src={preview}
        frameborder="0"
        width="100%"
        height="700px"
      ></iframe>
    </div>
  );
};

export default WartaJemaatDownload;
