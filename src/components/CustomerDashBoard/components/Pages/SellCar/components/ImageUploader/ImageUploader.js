// import React, {useCallback} from 'react'
// import { useDropzone } from 'react-dropzone'
// import * as api from '../../../../../../Utils/api';
// import axios from 'axios';

// const ImageUploader = () => {
//   const onDrop = useCallback(acceptedFiles => {
//     // Do something with the files
//     const file = acceptedFiles[0];
//     console.log(file, 'v');

//     const formData = new FormData();
//     formData.append("file", file);

//     axios
//       .post(
//       `http://localhost:8080/api/v1/image/upload`,
//       formData,
//       {
//         headers: {
//           "Content-Type": "multipart/from-data"
//         }
//       }
//     ).then(() => {
//       console.log("file upload successfully")
//     }).catch(err => {
//       console.log(err);
//     })
//     // const imgRes = api.uploadImage(file);
//     // if (imgRes.status === 200) {
//     //   console.log(imgRes.data, "return image value");
//     // }

//   }, [])
//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

//   return (
//     <div {...getRootProps()}>
//       <input {...getInputProps()} />
//       {
//         isDragActive ?
//           <p>Drop the image here ...</p> :
//           <p>Drag 'n' drop image here, or click to select image</p>
//       }
//     </div>
//   )
// }

// export default ImageUploader;

import React, {useEffect, useState} from 'react';
import { useDropzone } from 'react-dropzone';
import * as api from '../../../../../../Utils/api';
import axios from 'axios';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 200,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};


const ImageUploader = ({setImgUrl}) => {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
      const image = files[0];
      console.log(image);
      const file = new FormData();
      file.append("file", image);

      axios
        .post(
        `http://localhost:8080/api/v1/vehicles/upload`,
        file,
        {
          headers: {
            "Content-Type": "multipart/from-data"
          }
        }
      ).then((res) => {
        console.log("file upload successfully")
        console.log(res.data);
        setImgUrl(res.data);
      }).catch(err => {
        console.log(err);
      })
    }
  });
  
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          alt="car"
        />
      </div>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drop image here, or click to select image</p>
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </section>
  );
}

export default ImageUploader;
