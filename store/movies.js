export const state = () => ({
    movies: [
        {
         "id": 1,
         "name":"The Shawshank Redemption",
         "description":"Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
         "poster":"9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg",
         "rating": 85,
         "categoreis":"Crime, Drama",
         "director": "Frank Darabont",
         "release_date": 1994
       },
       {
         "id": 2,
         "name":"The Godfather ",
         "description":"Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
         "poster":"rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
         "rating": 86,
         "categoreis": "Crime, Drama",
         "director": "Francis Ford Coppola",
         "release_date": 1972
       },
        {
         "id": 3,
         "name":"Fight Club",
         "description":"A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
         "poster":"adw6Lq9FiC9zjYEpOqfq03ituwp.jpg",
         "rating":83,
         "categoreis": "Drama",
         "director":"David Fincher",
         "release_date": 1999
       },
        {
         "id": 4,
         "name":"The Green Mile",
         "description":"A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cellblock's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
         "poster":"3yJUlOtVa09CYJocwBU8eAryja0.jpg",
         "rating":82,
         "categoreis": "Crime, Drama, Fantasy",
         "director":"Frank Darabont",
         "release_date": 1999
       },
        {
         "id": 5,
         "name":"American History X",
         "description":"Derek Vineyard is paroled after serving 3 years in prison for killing two thugs who tried to break into/steal his truck. Through his brother, Danny Vineyard's narration, we learn that before going to prison, Derek was a skinhead and the leader of a violent white supremacist gang that committed acts of racial crime throughout L.A. and his actions greatly influenced Danny. Reformed and fresh out of prison, Derek severs contact with the gang and becomes determined to keep Danny from going down the same violent path as he did.",
         "poster":"fXepRAYOx1qC3wju7XdDGx60775.jpg",
         "rating":81,
         "categoreis": "Drama",
         "director":"Tony Kaye",
         "release_date": 1988
       },
        {
         "id": 6,
         "name":"Detachment ",
         "description":"A chronicle of three weeks in the lives of several high school teachers, administrators and students through the eyes of substitute teacher, Henry Barthes. Henry roams from school to school, imparting modes of knowledge, but never staying long enough to form any semblance of sentient attachment.",
         "poster":"9vvvuC3Rg7pLZ1r9FZOaj59LzA4.jpg",
         "rating":74,
          "categoreis": "Drama",
         "director":"Tony Kate",
         "release_date": 2011
       },
       {
         "id": 7,
         "name":"City Of God",
         "description":"Cidade de Deus is a shantytown that started during the 1960s and became one of Rio de Janeiro’s most dangerous places in the beginning of the 1980s. To tell the story of this place, the movie describes the life of various characters, all seen by the point of view of the narrator, Buscapé. Buscapé was raised in a very violent environment. Despite the feeling that all odds were against him, he finds out that life can be seen with other eyes: The eyes of an artist. By accident, he becomes a professional photographer, gaining his freedom.",
         "poster":"gCqnQaq8T4CfioP9uETLx9iMJF4.jpg",
         "rating":82,
         "categoreis": "Crime, Drama",
         "director":"Kátia Lund",
         "release_date": 2002
       },
       {
         "id": 8,
         "name":"Thor: Ragnarok ",
         "description":"Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the destruction of his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.",
         "poster":"oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg",
         "rating": 76,
          "categoreis": "Action, Adventure, Comedy, Fantasy",
         "director":"Stephany Folsom",
         "release_date": 2017
       },
        {
         "id": 9,
         "name":"Gone Girl ",
         "description":"With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
         "poster":"gdiLTof3rbPDAmPaCf4g6op46bj.jpg",
         "rating":79,
          "categoreis": "Mystery, Thriller, Drama",
         "director":"David Fincher",
         "release_date": 2014
       },
        {
         "id": 10,
         "name":"The Social Network ",
         "description":"On a fall night in 2003, Harvard undergrad and computer programming genius Mark Zuckerberg sits down at his computer and heatedly begins working on a new idea. In a fury of blogging and programming, what begins in his dorm room as a small site among friends soon becomes a global social network and a revolution in communication. A mere six years and 500 million friends later, Mark Zuckerberg is the youngest billionaire in history... but for this entrepreneur, success leads to both personal and legal complications.n",
         "poster":"ok5Wh8385Kgblq9MSU4VGvazeMH.jpg",
         "rating":72,
         "categoreis": "Drame",
         "director":"David Fincher",
         "release_date": 200
       }
     ],
     currentMovie:null,
     movieModalShow:false
});

export const getters = {

};
export const mutations = {
  setcurrentMovie(state, data){
      state.currentMovie = data;
  },
  setMovieModalShow(state , data){
    state.movieModalShow = data;
}

};
export const actions = {

};