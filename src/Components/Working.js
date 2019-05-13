<div>
  <ul>
    {pokemon.map((item, id) => {
      return(
        <li className="pokemon__item" key={id}>
          <div className="pokemon__card">
            <img className="pokemon__img" src={item.url} alt={`Imagen de ${item.name}`}></img>
            <h2 className="pokemon__name">{item.name}</h2>
            <ul>{item.types.map(obj=> {
              return(
                <li>{obj}</li>
              );
            })}
            </ul>
          </div>
        </li>
      );
    })}
  </ul>
</div>