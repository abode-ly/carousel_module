import React from 'react';
import styles from '../styles/photoCollage.css';


const PhotoCollage3 = ({
  dataArr, handleClickedImage, toggleModal,
}) => (
  <>
    <div className={styles.fourthImageContainer}>
      <img className={styles.fourthImage} src={dataArr.photosAndComments[3].imageUrl} onClick={() => {handleClickedImage(3, () => {toggleModal()})}} alt="host home" />
    </div>
    <div className={styles.fifthImageContainer}>
      <img className={styles.fifthImage} src={dataArr.photosAndComments[4].imageUrl} onClick={() => {handleClickedImage(4, () => {toggleModal()})}} alt="host home" />
    </div>
  </>
);


export default PhotoCollage3;
