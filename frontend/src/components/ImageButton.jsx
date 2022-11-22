function ImageButton({ src, alt, onClick, className }) {
  return (
    <button type="button" onClick={onClick}>
      <img src={src} alt={alt} className={className} />
    </button>
  );
}

export default ImageButton;
