export default function Thumbnails({
  title,
  images,
  id,
}: {
  imageIndex: number;
  title: string;
  images: string[];
  id: string;
}) {
  return (
    <ul className="carousel__thumbnails thumbnails">
      {images.map((src, index) => {
        return (
          <li className="thumbnails__item" key={id + index}>
            <img src={src} alt={`Shows ${title}`} />
          </li>
        );
      })}
    </ul>
  );
}
