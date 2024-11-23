export default function thumbnails({ imageIndex }: { imageIndex: number }) {
  function updateThumbnails() {
    const t = [...item.thumbnails];
    console.log(t);
    t.splice(imageIndex, 1);
    setThumbnails(t);
  }
  return (
    <ul className="carousel__thumbnails thumbnails">
      {thumbnails.map((src, index) => {
        return (
          <li className="thumbnails__item" key={item.id + index}>
            <img src={src} alt={`Shows ${item.title}`} />
          </li>
        );
      })}
    </ul>
  );
}
