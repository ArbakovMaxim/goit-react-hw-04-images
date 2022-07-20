import { Searchbar } from 'components/Searchbar/Searchbar';
import { useState } from 'react';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { apiImage } from './services/api';
import { Modal } from './components/Modal/Modal';
import { Spiner } from './components/Spiner/Spiner';
import { useEffect } from 'react';

export const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (searchValue === '') {
      return;
    }
    const fetchGallery = async (searchValue, page) => {
      try {
        const image = await apiImage(searchValue, page);
        setImages(prevState => [...prevState, ...image]);
        setError('');
        if (image.length === 0) {
          setError('По вашему запросу не чего не найдено!');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setStatus('rejected');
      }
    };
    setStatus('pending');
    if (page === 1) {
      setImages([]);
    }
    fetchGallery(searchValue, page);
  }, [searchValue, page]);

  const onSubmit = event => {
    if (event.trim() !== '') {
      setSearchValue(event);
      setPage(1);
      setStatus('pending');
    }
    setError('В ведите запрос');
    setImages([]);
    setStatus('rejected');
  };

  const toggleModal = largeImageURL => {
    setShowModal(!showModal);
    setModalImage(largeImageURL);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit} errorStatus={error} />
      {status === 'pending' && <Spiner />}
      {images.length !== 0 && (
        <ImageGallery
          loadMore={loadMore}
          imagesInfo={images}
          toggleModal={toggleModal}
        />
      )}
      {showModal && <Modal image={modalImage} closeModal={toggleModal} />}
    </>
  );
};
