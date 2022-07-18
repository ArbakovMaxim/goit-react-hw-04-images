import { ListElement, ListImg } from './ImageItems.stylrd';

export function ImageItems({ alt, previewImage, onClickImage }) {
  return (
    <ListElement>
      <ListImg src={previewImage} alt={alt} onClick={onClickImage} />
    </ListElement>
  );
}
