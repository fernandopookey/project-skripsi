import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const WartaJemaatDownload = () => {
  // const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [preview, setPreview] = useState("");
  const { id } = useParams();
  // const navigate = useNavigate();
  const [pdfError, setPdfError] = useState(null);
  const allowedFiles = ["application/pdf"];
  const [msg, setMsg] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [pdfFile, setPdfFile] = useState(null);

  useEffect(() => {
    getWartaJemaatById();
  }, []);

  const getWartaJemaatById = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_GET_API}/wartajemaat/${id}`
    );
    setTitle(response.data.name);
    setFile(response.data.file);
    // setPreview(response.data.url);
  };

  const handleFile = (e) => {
    let selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      if (selectedFile && allowedFiles.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfError("");
          setPdfFile(e.target.result);
          // console.log(e.target.result);
        };
      } else {
        setPdfError("invalid");
      }
    } else {
      console.log("Select");
    }
  };

  return (
    <div>
      <div>
        <h4>Detail Warta</h4>
        <p>{title}</p>
        {/* <embed src={document} type="application/pdf" /> */}
        <object data={file} type=""></object>
      </div>
    </div>
  );
};

export default WartaJemaatDownload;
