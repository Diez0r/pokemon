export default {
  methods: {
    getBackgroundColor(type) {
      switch (type) {
        case 'fire':
          return '#FDDFDF'
          break

        case 'grass':
          return '#DEFDE0'
          break

        case 'electric':
          return '#FCF7DE'
          break

        case 'water':
          return '#DEF3FD'
          break

        case 'ground':
          return '#f4e7da'
          break

        case 'rock':
          return '#d5d5d4'
          break

        case 'fairy':
          return '#fceaff'
          break

        case 'poison':
          return '#98d7a5'
          break

        case 'bug':
          return '#f8d5a3'
          break

        case 'dragon':
          return '#97b3e6'
          break

        case 'psychic':
          return '#eaeda1'
          break

        case 'flying':
          return '#F5F5F5'
          break

        case 'fighting':
          return '#E6E0D4'
          break

        case 'nornal':
          return '#F5F5F5'
          break
      }
    },
    getPokemonInfo(pokemon) {
      if (pokemon.name.toLowerCase() === 'pikachu') {
        alert('Pika - Pika')
      } else {
        console.log(`Name:${pokemon.name}, Type:${pokemon.type}`)
      }
    }
  },
};
