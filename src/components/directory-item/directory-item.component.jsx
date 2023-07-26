import {
  DirectoryImage,
  DirectoryItemBody,
  DirectoryItemContainer
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <DirectoryImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <DirectoryItemBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
