export default function ThumbnailsItem({ id, index, src, title }) {
  return (
    <li className="thumbnails__item" key={id + index}>
      <img src={src} alt={`Shows ${title}`} />
    </li>
  );
}
