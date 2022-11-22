function ImageButton({ src, alt, onClick, className, disabled }) {
  return (
    <button type="button" disabled={disabled} onClick={onClick}>
      <img src={src} alt={alt} className={className} />
    </button>
  );
}

export default ImageButton;
