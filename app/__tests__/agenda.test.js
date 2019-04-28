import Trainer from './../agenda/model/trainer.model'
import Pokemon from './../agenda/model/pokemon.model'


describe('Nosso primeiro teste', () => {

  it('Deve retornar true', () => {
    expect(true).toBe(true)
  })

  it('Deve retornar o nome do treinador', function(){
    let trainer = new Trainer('Ash');
    expect(trainer.getName()).toBe('Ash');
  })

  it('Deve retorna um nome do pokemon', function(){
    let pokemon = new Pokemon('Pikachu', 1)
    expect(pokemon.getName()).toBe('Pikachu')
  })

  it('Deve retorna o tipo do pokemon', function(){
    let pokemon = new Pokemon('Pikachu', 1)
    expect(pokemon.getType()).toBe(1)
  })

  it('Deve adicionar um pokemon a um treinador', function(){
    let trainer = new Trainer('Ash')
    let pokemon = new Pokemon('Pikachu', 1)
    trainer.addPokemon(pokemon)
    expect(trainer.getPokemon('Pikachu')).toBe('Pikachu')
  })


})
