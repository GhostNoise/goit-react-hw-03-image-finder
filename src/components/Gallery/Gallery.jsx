import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.css';
import PhotoCard from '../PhotoCard/PhotoCard';

const Gallery = ({ images, modalOpened }) => (
  <ul className={styles.gallery}>
    {images.map(imageItem => (
      <li key={imageItem.id} className={styles.galleryItem}>
        <PhotoCard imageItem={imageItem} modalOpened={modalOpened} />
      </li>
    ))}
  </ul>
);

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      downloads: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ).isRequired,
  modalOpened: PropTypes.func.isRequired,
};

export default Gallery;
