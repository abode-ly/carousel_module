import React, { Suspense } from 'react';
import styles from '../styles/photoCollage.css';


const PhotoCollage2 = React.lazy(() => import('./photoCollage2'));
const PhotoCollage3 = React.lazy(() => import('./photoCollage3'));


const PhotoCollage = ({
  dataArr, handleClickedImage, toggleModal,
}) => {
  if (dataArr.photosAndComments.length < 5) {
    return (
      <div>
        <div className={styles.containerLessThan5}>
          <img className={styles.firstImageLessThan5} src={dataArr.photosAndComments[0].imageUrl} onClick={() => {handleClickedImage(0, () => {toggleModal()})}} alt="host home" />
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.firstImageContainer}>
          <img className={styles.firstImage} src={dataArr.photosAndComments[0].imageUrl} onClick={() => {handleClickedImage(0, () => {toggleModal()})}} alt="host home" />
        </div>
        <Suspense fallback={<div className={styles.loading}>Loading...</div>}>
          <PhotoCollage2
            dataArr={dataArr}
            toggleModal={toggleModal}
            handleClickedImage={handleClickedImage}
          />
        </Suspense>
        <Suspense fallback={<div className={styles.loading}>Loading...</div>}>
          <PhotoCollage3
            dataArr={dataArr}
            toggleModal={toggleModal}
            handleClickedImage={handleClickedImage}
          />
        </Suspense>
      </div>
    </div>
  );
};


export default PhotoCollage;


{/* <div>
  <div className={styles.container}>
    <img className={styles.firstImage} src={dataArr.photosAndComments[0].imageUrl} onClick={() => {handleClickedImage(0, () => {toggleModal()})}} alt="host home" />
    <img className={styles.secondImage} src={dataArr.photosAndComments[1].imageUrl} onClick={() => {handleClickedImage(1, () => {toggleModal()})}} alt="host home" />
    <img className={styles.thirdImage} src={dataArr.photosAndComments[2].imageUrl} onClick={() => {handleClickedImage(2, () => {toggleModal()})}} alt="host home" />
    <img className={styles.fourthImage} src={dataArr.photosAndComments[3].imageUrl} onClick={() => {handleClickedImage(3, () => {toggleModal()})}} alt="host home" />
    <img className={styles.fifthImage} src={dataArr.photosAndComments[4].imageUrl} onClick={() => {handleClickedImage(4, () => {toggleModal()})}} alt="host home" />
  </div>
</div> */}