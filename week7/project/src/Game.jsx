import CheckMark from "./assets/check-solid.svg"
import XMark from "./assets/xmark-solid.svg"

export default function Game({index, name, releaseDate, genre, collected}) {
  //returns a row for 'Games' table.
    return (
        <tr
        style={{
            backgroundColor: index % 2 !== 0 ? "white" : "lightgray"
          }}>
      <td>{name}</td>
      <td>{releaseDate}</td>
      <td>{genre}</td>

      <td><img className="icon"
      src={
        collected ? CheckMark : XMark
        }
        alt="collected or not"
        /></td>
      </tr>
    )
  }