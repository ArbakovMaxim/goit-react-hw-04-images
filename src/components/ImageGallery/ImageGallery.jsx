import { ImageItems } from 'components/ImageGallery/ImageItems/ImageItems';
import { BtnWrapper, BtnLoadMore, List } from './ImageGallery.styled';

export function ImageGallery({ imagesInfo, toggleModal, loadMore }) {
  return (
    <>
      <List>
        {imagesInfo.map(({ id, tags, webformatURL, largeImageURL }) => (
          <ImageItems
            key={id}
            alt={tags}
            previewImage={webformatURL}
            onClickImage={() => {
              toggleModal(largeImageURL);
            }}
          />
        ))}
      </List>
      <BtnWrapper>
        <BtnLoadMore type="button" onClick={loadMore}>
          load more
        </BtnLoadMore>
      </BtnWrapper>
    </>
  );
}
