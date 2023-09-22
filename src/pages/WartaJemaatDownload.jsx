import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const WartaJemaatDownload = () => {
  // const [wartaJemaat, setWartaJemaat] = useState([]);
  // const getWartaJemaat = async () => {
  //   const response = await axios.get(
  //     `${process.env.REACT_APP_GET_API}/wartajemaat`
  //   );
  //   setWartaJemaat(response.data);
  // };

  // useEffect(() => {
  //   getWartaJemaat();
  // }, []);

  // const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const { id } = useParams();
  // const navigate = useNavigate();

  useEffect(() => {
    getSliderById();
  }, []);

  const getSliderById = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_GET_API}/wartajemaat/${id}`
    );
    setTitle(response.data.title);
    setFile(response.data.document);
    setPreview(response.data.url);
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  // const updateSlider = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("title", title);
  //   try {
  //     await axios.patch(
  //       `${process.env.REACT_APP_GET_API}/slider/${id}`,
  //       formData
  //     );
  //     swal({
  //       title: "Sukses",
  //       text: "Data berhasil diubah",
  //       icon: "success",
  //       button: "Ok",
  //     });
  //     navigate("/slider");
  //   } catch (error) {
  //     if (error.response) {
  //       setMsg(error.response.data.msg);
  //     }
  //   }
  // };

  return (
    <div>
      <div>
        <h4>Detail Warta</h4>
        {/* <p>{title}</p> */}
        {/* <embed src={document} type="application/pdf" /> */}
        <iframe src={document} frameborder="0"></iframe>
      </div>
    </div>
  );
};

export default WartaJemaatDownload;
