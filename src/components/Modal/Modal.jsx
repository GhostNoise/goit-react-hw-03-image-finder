import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export default class Modal extends PureComponent {
  overlayRef = createRef();

  static propTypes = {
    largeImage: PropTypes.string.isRequired,
    modalClosed: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleEsc);
  }

  handleEsc = e => {
    const { modalClosed } = this.props;

    if (e.keyCode === 27) modalClosed();
  };

  handleClick = e => {
    const { modalClosed } = this.props;

    if (e.target === this.overlayRef.current) {
      modalClosed();
    }
  };

  render() {
    const { largeImage } = this.props;
    return (
      <div
        className={styles.overlay}
        onClick={this.handleClick}
        onKeyDown={() => {}}
        role="button"
        tabIndex={0}
        ref={this.overlayRef}
      >
        <div className={styles.modal}>
          <img src={largeImage} alt="Large images" />
        </div>
      </div>
    );
  }
}
