function ImageButton({ src, alt, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      <img src={src} alt={alt} className="w-40" />
    </button>
  );
}

export default ImageButton;
