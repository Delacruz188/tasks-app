export default function ListComponent({ nombre }) {
  const nombreRecibido = nombre;

  return (
    <div>
      <h1>{nombreRecibido}</h1>
    </div>
  );
}
