import React, { Component } from 'react';
import imagesObj from '../../API/getApi';
import filteredImagesObj from '../../API/filteredGetApi';

import SearchForm from '../SearchForm/SearchForm';
import Modal from '../Modal/Modal';
import Gallery from '../Gallery/Gallery';

import styles from './App.module.css';

export default class App extends Component {
  state = {
    images: [],
    query: null,
    largeImage: false,
    pageNumber: 1,
  };

  componentDidMount() {
    const { pageNumber } = this.state;

    imagesObj(pageNumber)
      .then(data => {
        this.setState({ images: data.map(filteredImagesObj) });
      })
      .catch(err => console.log(err));
  }

  modalOpened = image => {
    this.setState({ largeImage: image });
  };

  modalClosed = () => {
    this.setState({ largeImage: null });
  };

  onSubmit = query => {
    const { pageNumber } = this.state;

    this.setState({ query, pageNumber: 1 }, () => {
      imagesObj(pageNumber, query)
        .then(data => {
          this.setState({ images: data.map(filteredImagesObj) });
        })
        .catch(error => console.log(error));
    });
  };

  loadMore = () => {
    const { pageNumber, query, images } = this.state;
    imagesObj(pageNumber, query).then(data => {
      this.setState({
        images: [...images, ...data.map(filteredImagesObj)],
      });
      window.scrollTo({
        top: 100000,
        behavior: 'smooth',
      });
    });
  };

  handleLoadMore = () => {
    this.setState(
      prev => ({
        pageNumber: prev.pageNumber + 1,
      }),
      this.loadMore(),
    );
  };

  render() {
    const { images, largeImage } = this.state;
    return (
      <div className={styles.app}>
        <SearchForm onSubmit={this.onSubmit} />
        <Gallery images={images} modalOpened={this.modalOpened} />
        {largeImage && (
          <Modal largeImage={largeImage} modalClosed={this.modalClosed} />
        )}

        <button
          type="button"
          className={styles.button}
          onClick={this.handleLoadMore}
        >
          Load more
        </button>
      </div>
    );
  }
}
