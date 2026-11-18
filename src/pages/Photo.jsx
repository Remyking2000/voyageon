export default function Photo(props) {
  return (
    <div className="photo-frame">
      <img decoding="async" {...props} />
    </div>
  );
}
