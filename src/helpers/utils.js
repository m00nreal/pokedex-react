export const getPokemonAbilities = (pokemon) => pokemon.abilities.map( ({ ability }) => (ability.name));

export const getPokemonTypes = (pokemon) => pokemon.types.map( ({ type }) => (type.name));

export const capitalize = string => {
    return string !== '' ? string.split(' ').map(s => s[0].toUpperCase().concat(s.slice(1))).join(' ') : '';
}

export const getTypeColor = type => {
    switch (type.toLowerCase()) {
        case 'fire':        return '#f5222d'
        case 'bug':         return '#7cb305'
        case 'dark':        return '#434343'
        case 'ice':         return '#69c0ff'
        case 'electric':    return '#faad14'
        case 'grass':       return '#95de64'
        case 'normal':      return '#d9d9d9'
        case 'rock':        return '#873800'
        case 'fairy':       return '#ffadd2'
        case 'flying':      return '#d6e4ff'
        case 'ground':      return '#613400'
        case 'poison':      return '#3f6600'
        case 'steel':       return '#d9d9d9'
        case 'dragon':      return '#722ed1'
        case 'fighting':    return '#ad2102'
        case 'ghost':       return '#391085'
        case 'psychic':     return '#c41d7f'
        case 'water':       return '#597ef7'
        default: return '#f4f4f4';
    }
}