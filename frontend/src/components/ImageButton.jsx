function ImageButton({ disabled, src, alt, onClick }) {
  return (
    <button type="button" disabled={disabled} onClick={onClick}>
      <img src={src} alt={alt} className="w-40" />
    </button>
  );
}

export default ImageButton;
