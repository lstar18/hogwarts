
const students = [
  {
    id: 'student1',
    name: 'Katie Bell',
    picture: 'https://vignette.wikia.nocookie.net/harrypotter/images/3/39/Katie_bell1-kl.jpg/revision/latest?cb=20090526214420',
    houseId: 'house1',
  },
  {
    id: 'student2',
    name: 'Ginny Weasley',
    picture: 'https://vignette.wikia.nocookie.net/harrypotter/images/1/1e/Ginerva.PNG/revision/latest?cb=20090711092855',
    houseId: 'house1',
  },
  {
    id: 'student3',
    name: 'Demelza Robins',
    picture: 'https://vignette.wikia.nocookie.net/harrypotter/images/a/ae/Demelza_robins.PNG/revision/latest?cb=20090711095409',
    houseId: 'house1',
  },
  {
    id: 'student4',
    name: 'Jimmy Peakes',
    picture: 'https://vignette.wikia.nocookie.net/harrypotter/images/3/3a/Jimmypeakes.PNG/revision/latest?cb=20110522183232',
    houseId: 'house1',
  },
  {
    id: 'student5',
    name: 'Ritchie Cootes',
    picture: 'https://vignette.wikia.nocookie.net/harrypotter/images/c/cb/RitchieC.PNG/revision/latest?cb=20090516210536',
    houseId: 'house1',
  },
  {
    id: 'student6',
    name: 'Ron Weasley',
    picture: 'https://vignette.wikia.nocookie.net/harrypotter/images/3/33/RonKeeper.jpg/revision/latest?cb=20110905145250',
    houseId: 'house1',
  },
  {
    id: 'student7',
    name: 'Harry Potter',
    picture: 'https://vignette.wikia.nocookie.net/harrypotter/images/c/c2/HarrywithNimbus.jpg/revision/latest?cb=20090723155006',
    houseId: 'house1',
  },
  {
    id: 'student8',
    name: 'Cormac McLaggen',
    picture: 'https://vignette.wikia.nocookie.net/harrypotter/images/b/bd/Cormacl1.PNG/revision/latest?cb=20090906135929',
    houseId: 'house1',
  },
  {
    id: 'student9',
    name: 'Dean Thomas',
    picture: 'https://vignette.wikia.nocookie.net/harrypotter/images/c/cf/Deanthomas_prop.PNG/revision/latest?cb=20090808162439',
    houseId: 'house1',
  },
  {
    id: 'student10',
    name: 'Vaisey',
    picture: 'https://vignette.wikia.nocookie.net/harrypotter/images/8/89/Vaisey.jpg/revision/latest?cb=20110425175039',
    houseId: 'house2',
  },
  {
    id: 'student11',
    name: 'Blaise Zabini',
    picture: 'https://vignette.wikia.nocookie.net/harrypotter/images/5/59/Blaise_Zabini.png/revision/latest?cb=20170102051038',
    houseId: 'house2',
  },
  {
    id: 'student12',
    name: 'Vincent Crabbe',
    picture: 'https://vignette.wikia.nocookie.net/harrypotter/images/b/ba/Vincent_Crabbe.jpg/revision/latest?cb=20091224183746',
    houseId: 'house2',
  },
  {
    id: 'student13',
    name: 'Gregory Goyle',
    picture: 'https://vignette.wikia.nocookie.net/harrypotter/images/3/38/Carbegoye.jpg/revision/latest?cb=20100621093114',
    houseId: 'house2',
  },
  {
    id: 'student14',
    name: 'Draco Malfoy',
    picture: 'https://vignette.wikia.nocookie.net/harrypotter/images/8/80/Bad_boy.jpg/revision/latest?cb=20110419204437',
    houseId: 'house2',
  },
  {
    id: 'student15',
    name: 'Harper',
    picture: 'https://vignette.wikia.nocookie.net/harrypotter/images/f/f9/Harper.png/revision/latest?cb=20101209010657',
    houseId: 'house2',
  },
  {
    id: 'student16',
    name: 'Roger Davies',
    picture: 'https://vignette.wikia.nocookie.net/harrypotter/images/8/82/Fleur_y_Roger_Davies_1.jpg/revision/latest?cb=20180322052136',
    houseId: 'house3',
  },
  {
    id: 'student17',
    name: 'Jeremy Stretton',
    picture: 'https://vignette.wikia.nocookie.net/harrypotter/images/0/06/Jeremy_Stretton_Cleansweep_Seven.jpg/revision/latest?cb=20091020205540',
    houseId: 'house3',
  },
  {
    id: 'student18',
    name: 'Randolph Burrow',
    picture: 'https://vignette.wikia.nocookie.net/harrypotter/images/0/07/RandolphBurrow.png/revision/latest?cb=20130320231816',
    houseId: 'house3',
  },
  {
    id: 'student19',
    name: 'Duncan Inglebee',
    picture: 'https://vignette.wikia.nocookie.net/harrypotter/images/2/29/Dinglebee.png/revision/latest?cb=20140827133418',
    houseId: 'house3',
  },
  {
    id: 'student20',
    name: 'Jason Samuels',
    picture: 'https://vignette.wikia.nocookie.net/harrypotter/images/1/1b/Jasonsamuelsqwc.png/revision/latest?cb=20140827133708',
    houseId: 'house3',
  },
  {
    id: 'student21',
    name: 'Grant Page',
    picture: 'https://vignette.wikia.nocookie.net/harrypotter/images/9/93/GrantPage.png/revision/latest?cb=20130320232028',
    houseId: 'house3',
  },
  {
    id: 'student22',
    name: 'Cho Chang',
    picture: 'https://vignette.wikia.nocookie.net/harrypotter/images/e/e1/Cho.jpg/revision/latest?cb=20090725204212',
    houseId: 'house3',
  },
  {
    id: 'student23',
    name: 'Malcolm Preece',
    picture: 'https://vignette.wikia.nocookie.net/harrypotter/images/9/92/Malcolm_Preece.png/revision/latest?cb=20170304122953',
    houseId: 'house4',
  },
  {
    id: 'student24',
    name: 'Heidi Macacoy',
    picture: 'https://vignette.wikia.nocookie.net/harrypotter/images/a/af/Heidi_Macavoy.png/revision/latest?cb=20170304123437',
    houseId: 'house4',
  },
  {
    id: 'student25',
    name: 'Tamsin Applebee',
    picture: 'https://vignette.wikia.nocookie.net/harrypotter/images/4/48/Tamsin_Applebee.png/revision/latest?cb=20170304124301',
    houseId: 'house4',
  },
  {
    id: 'student26',
    name: 'Maxine OFlaherty',
    picture: 'https://vignette.wikia.nocookie.net/harrypotter/images/6/64/Maxine_O%27Flaherty.png/revision/latest?cb=20170304123914',
    houseId: 'house4',
  },
  {
    id: 'student27',
    name: 'Anthony Rickett',
    picture: 'https://vignette.wikia.nocookie.net/harryalbuspotter/images/e/ea/Anthony_Rickett.PNG/revision/latest?cb=20120107004734',
    houseId: 'house4',
  },
  {
    id: 'student28',
    name: 'Herbert Fleet',
    picture: 'https://vignette.wikia.nocookie.net/harrypotter/images/0/04/Herbert_Fleet.png/revision/latest?cb=20170304124757',
    houseId: 'house4',
  },
  {
    id: 'student29',
    name: 'Cedric Diggory',
    picture: 'https://vignette.wikia.nocookie.net/harrypotter/images/2/25/Cedric-Diggory-cedric-diggory-2719265-1842-2560.jpg/revision/latest?cb=20140619192245',
    houseId: 'house4',
  },
];

const getStudents = () => students;

export default { getStudents };
