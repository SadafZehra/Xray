import { useState, useRef, useEffect } from 'react'
import Arrow from './Ui/arrow.png'
import Nothing from './Ui/nothing.JPG'
import { storage}  from './Firebase/firebase'
import firebase from './Firebase/index'
import LineChart from './chart'
import { Link } from "react-router-dom";

export default function Xray() {
    const [imageURL, setImageURL] = useState(null);
    const imageRef = useRef()
    const fileInputRef = useRef()

    // useEffect(() => {
    //     fetch('/members').then((response) => {
    //         if (response.ok) {
    //             return response.json()
    //         }
    //     })
    //         .then((data) => {
    //             console.log(data)
    //         })
    // }, [])




    const handleImage = (e) => {
        setImageURL(e.target.files[0])
        const { files } = e.target
        if (files.length > 0) {
            const url = URL.createObjectURL(files[0])

            setImageURL(url)
            console.log(imageURL, "imageUrl")
        } else {
            setImageURL(null)
        }

    }

    const uploadImage = (e) => {
        console.log("IMAGE", imageURL)
    }
    const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    let items={
       'image':image.name,
       'read':false
    }
    firebase.database().ref('/').child('images_formodel').push(items)
    const uploadTask = storage.ref(`images_formodel/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images_formodel")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
            console.log(url,"url fetching")
          });
      }
    );
  };

  console.log("image: ", image);
    return (
        <>
            <div className="App">
                <h3>Xray Analyzer</h3>
                {/*                 <p>value from backend{token}</p> */}
                <div className='inputHolder'>
                   
                    <div>
                        <progress value={progress} max="100" />
                        <br />
                        <br />
                        <input  type='file' accept='image/*' capture='camera'onChange={handleChange} />
                        <button onClick={handleUpload}>Upload</button>
                        <br />
                        <br />
                        {progress >0 ? <><Link to='/members'>Results</Link></>:<h2></h2>}
                    </div>
                </div>
                
            </div>
        </>
    )
}