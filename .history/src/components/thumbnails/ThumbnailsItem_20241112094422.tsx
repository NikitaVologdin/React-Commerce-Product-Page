export default function ThumbnailsItem({ id, isSelected, src, title }) {
  return (
    <li className="thumbnails__item">
      <img src={src} alt={`Shows ${title}`} />
    </li>
  );
}
