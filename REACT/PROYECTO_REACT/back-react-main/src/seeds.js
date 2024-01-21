const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const RickYMorty = require('./api/models/rickymorty.model');

const arrayRickYMorty = [
  {
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "Human",
    gender: "Male",
    origin: "Earth (C-137)",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  },
  {
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    type: "Human",
    gender: "Male",
    origin: "Earth (C-137)",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
  },
  {
    name: "Summer Smith",
    status: "Alive",
    species: "Human",
    type: "Human",
    gender: "Female",
    origin: "Earth (Replacement Dimension)",
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
  },
  {
    name: "Beth Smith",
    status: "Alive",
    species: "Human",
    type: "Human",
    gender: "Female",
    origin: "Earth (Replacement Dimension)",
    image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
  },
  {
    name: "Jerry Smith",
    status: "Alive",
    species: "Human",
    type: "Human",
    gender: "Male",
    origin: "Earth (Replacement Dimension)",
    image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
  },
  {
    name: "Abadango Cluster Princess",
    status: "Alive",
    species: "Alien",
    type: "Alien",
    gender: "Female",
    origin: "Abadango",
    image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg"
  },
  {
    name: "Abradolf Lincler",
    status: "unknown",
    species: "Human",
    type: "Genetic experiment",
    gender: "Male",
    origin: "Earth (Replacement Dimension)",
    image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg"
  },
  {
    name: "Adjudicator Rick",
    status: "Dead",
    species: "Human",
    type: "Human",
    gender: "Male",
    origin: "unknown",
    image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg"
  },
  {
    name: "Agency Director",
    status: "Dead",
    species: "Human",
    type: "Human",
    gender: "Male",
    origin: "Earth (Replacement Dimension)",
    image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg"
  },
  {
    name: "Alan Rails",
    status: "Dead",
    species: "Human",
    type: "Superhuman (Ghost trains summoner)",
    gender: "Male",
    origin: "unknown",
    image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg"
  },
  {
    name: "Albert Einstein",
    status: "Dead",
    species: "Human",
    type: "Human",
    gender: "Male",
    origin: "Earth (C-137)",
    image: "https://rickandmortyapi.com/api/character/avatar/11.jpeg"
  },
  {
    name: "Alexander",
    status: "Dead",
    species: "Human",
    type: "Human",
    gender: "Male",
    origin: "Earth (C-137)",
    image: "https://rickandmortyapi.com/api/character/avatar/12.jpeg"
  },
  {
    name: "Alien Googah",
    status: "unknown",
    species: "Alien",
    type: "Alien",
    gender: "unknown",
    origin: "unknown",
    image: "https://rickandmortyapi.com/api/character/avatar/13.jpeg"
  },
  {
    name: "Alien Morty",
    status: "unknown",
    species: "Alien",
    type: "Alien",
    gender: "Male",
    origin: "unknown",
    image: "https://rickandmortyapi.com/api/character/avatar/14.jpeg"
  },
  {
    name: "Alien Rick",
    status: "unknown",
    species: "Alien",
    type: "Alien",
    gender: "Male",
    origin: "unknown",
    image: "https://rickandmortyapi.com/api/character/avatar/15.jpeg"
  },
  {
    name: "Amish Cyborg",
    status: "Dead",
    species: "Alien",
    type: "Parasite",
    gender: "Male",
    origin: "unknown",
    image: "https://rickandmortyapi.com/api/character/avatar/16.jpeg"
  },
  {
    name: "Annie",
    status: "Alive",
    species: "Human",
    type: "Human",
    gender: "Female",
    origin: "Earth (C-137)",
    image: "https://rickandmortyapi.com/api/character/avatar/17.jpeg"
  },
  {
    name: "Antenna Morty",
    status: "Alive",
    species: "Human",
    type: "Human with antennae",
    gender: "Male",
    origin: "unknown",
    image: "https://rickandmortyapi.com/api/character/avatar/18.jpeg"
  },
  {
    name: "Antenna Rick",
    status: "unknown",
    species: "Human",
    type: "Human with antennae",
    gender: "Male",
    origin: "unknown",
    image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg"
  },
  {
    name: "Ants in my Eyes Johnson",
    status: "unknown",
    species: "Human",
    type: "Human with ants in his eyes",
    gender: "Male",
    origin: "unknown",
    image: "https://rickandmortyapi.com/api/character/avatar/20.jpeg"
  }
  ];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allRickYMorty = await RickYMorty.find();
    if (allRickYMorty.length > 0) {
      await RickYMorty.collection.drop();
      console.log('RickYMorty borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los personajes', err);
  })
  .then(async () => {
    const rickymortysMap = arrayRickYMorty.map((rickYMorty) => new RickYMorty(rickYMorty));
    await RickYMorty.insertMany(rickymortysMap);
    console.log('personajes insertados');
  })
  .catch((err) => {
    console.log('error insertando los personajes', err);
  })
  .finally(() => mongoose.disconnect());
