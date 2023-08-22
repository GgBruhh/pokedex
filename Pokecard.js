const Pokecard = ({id, name, type, base_experience}) =>{
    let img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return(
        <div className='card'>
            <b>
                {name}
            </b>
            <img src={img} />
            <p>
                {type}
            </p>
            <p>
                EXP: {base_experience}
            </p>
        </div>
    )
}