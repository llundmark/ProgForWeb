export default function Camelid({image, name, fact}) {
    return (
        <article>
      <img
        src={image}
        alt={name}
      />
      <h2>{name}</h2>
      <p>{fact}</p>
      </article>
    )
  }