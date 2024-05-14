let games = [
    {id: '1', title: 'Zelda', platform: ['Switch']},
    {id: '2', title: 'Mario', platform: ['PS5', 'Xbox', 'PC']},
    {id: '3', title: 'Pokemon', platform: ['PS5', 'Xbox']}
]

let authors = [
    {id: '1', name: 'mario', verified: true},
    {id: '2', name: 'yoshi', verified: false},
    {id: '3', name: 'peach', verified: true},
]

let reviews = [
    {id: '1', rating: 9, content: 'copy', author_id: '1', game_id: '2'},
    {id: '2', rating: 6, content: 'copy', author_id: '3', game_id: '3'},
    {id: '3', rating: 10, content: 'copy', author_id: '2', game_id: '2'},
    {id: '4', rating: 5, content: 'copy', author_id: '1', game_id: '1'},
]

export default {games, authors, reviews}