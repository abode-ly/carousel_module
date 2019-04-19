import React from 'react';
import styles from '../styles/photoCollage.css';


const PhotoCollage2 = ({
  dataArr, handleClickedImage, toggleModal,
}) => (
  <>
    <div className={styles.secondImageContainer}>
      <img className={styles.secondImage} src={dataArr.photosAndComments[1].imageUrl} onClick={() => {handleClickedImage(1, () => {toggleModal()})}} alt="host home" />
    </div>
    <div className={styles.thirdImageContainer}>
      <img className={styles.thirdImage} src={dataArr.photosAndComments[2].imageUrl} onClick={() => {handleClickedImage(2, () => {toggleModal()})}} alt="host home" />
    </div>
  </>
);


export default PhotoCollage2;
