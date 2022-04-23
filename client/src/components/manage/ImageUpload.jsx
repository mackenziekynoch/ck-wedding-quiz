import * as React from 'react';
import _ from 'lodash';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ImageIcon from '@mui/icons-material/Image';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addImages } from '../../redux/store.js';

const HiddenInput = styled('input')({
  display: 'none'
});

const SuccessSnackbar = ({open, handleClose}) => (
  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
      Files uploaded!
    </Alert>
  </Snackbar>
);

const FailureSnackbar = ({open, handleClose}) => (
  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
      Files failed to upload. Try again or contact Mackenzie.
    </Alert>
  </Snackbar>
);


export const ImageUpload = (props) => {
  const [imagesUploaded, setImagesUploaded] = React.useState([]);
  const [imageNames, setImageNames] = React.useState([]);
  const [snackbar, setSnackbar] = React.useState(null);
  const { eventName } = props;
  const dispatch = useDispatch();

  const handleImageDelete = (imageName) => {
    const index = imageNames.indexOf(imageName);
    const oldImagesUploaded = _.clone(imagesUploaded);
    const oldImageNames = _.clone(imageNames);
    setImagesUploaded(() => {
      oldImagesUploaded.splice(index, 1);
      return oldImagesUploaded;
    });
    setImageNames(() => {
      oldImageNames.splice(index, 1)
      return oldImageNames;
    });
  };

  const handleSelect = (e) => {
    const files = e.target.files;
    setImagesUploaded((oldImagesUploaded) => [...oldImagesUploaded, ...files]);
    setImageNames((oldImageNames) => {
      const newImageNames = [];
      for (let i = 0; i < files.length; i++) {
        newImageNames.push(files[i].name);
      }
      return [...oldImageNames, ...newImageNames];
    });
  };

  const handleUpload = () => {
    if (imagesUploaded.length) {
      const formdata = new FormData();
      imagesUploaded.forEach((image) => formdata.append('file', image))

      axios.post(
        `/manage/${encodeURIComponent(eventName)}/files`,
        formdata,
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
        }
      )
      .then(res => {
        console.log(`Success ` + res.data);
        dispatch(addImages(imageNames));
        setSnackbar("success");
      })
      .catch(err => {
          console.log(err);
          setSnackbar("error");
      })
    } else {
      setSnackbar("error");
    }
  };

  return (
    <div>
      <span style={{display: 'block'}}>
        <label htmlFor="contained-button-file">
          <HiddenInput name="files" accept="image/*" id="contained-button-file" multiple type="file" onChange={handleSelect} />
          <Button variant="contained" component="span" sx={{mt: 3, mr: 1}} startIcon={<ImageIcon />}>
            Select Images
          </Button>
        </label>
        {imageNames.map((image, i) => (
          <Chip label={image} key={`${image}-${i}`} sx={{mt: 3, mr: 1}} onDelete={() => handleImageDelete(image)} />
        ))}
      </span>
      <Button variant="contained" component="span" sx={{mt: 3, mr: 1}} startIcon={<FileUploadIcon />} onClick={handleUpload}>
        Upload
      </Button>
      {snackbar == "success" &&
        <SuccessSnackbar open={true} handleClose={() => setSnackbar(null)} />
      }
      {snackbar == "error" &&
        <FailureSnackbar open={true} handleClose={() => setSnackbar(null)} />
      }
    </div>
  )
}