use history_app;
db.dropDatabase();

db.events.insertMany([
  {
    "tag": "WW2",
    "title": "Germany Invades Poland!",
    "date": "1 Sep 1939",
    "blurb": "",
    "location": "52.22269824588539, 19.31786494927118",
    "image": ""
  },
  {
    "tag": "WW2",
    "title": "Invasion of France",
    "date": "10 May – 25 June 1940",
    "blurb": "Its too sunny outside",
    "location": "Berlin",
    "image": ""
  },
  {
    "tag": "WW2",
    "title": "Dunkirk Evacuation",
    "date": "26 May 1940",
    "blurb": "Im going to listen to tims podcast",
    "location": "Glasgow",
    "image": ""
  },
  {
    "tag": "Me",
    "title": "Battle of Britian",
    "date": "10 July – 31 October 1940",
    "blurb": "Its too sunny outside",
    "location": "Berlin",
    "image": ""
  },
  {
    "tag": "WW2",
    "title": "Operation Barbarosa",
    "date": "22 June 1941",
    "blurb": "Its too sunny outside",
    "location": "Berlin",
    "image": ""
  },
  {
    "tag": "Me",
    "title": "Pearl Harbour Attack",
    "date": 3,
    "blurb": "Its too sunny outside",
    "location": "Berlin",
    "image": ""
  },
  {
    "tag": "Me",
    "title": "Battle of Stalingrad",
    "date": 3,
    "blurb": "Its too sunny outside",
    "location": "Berlin",
    "image": ""
  },
  {
    "tag": "Me",
    "title": "Invasion of Italy",
    "date": 3,
    "blurb": "Its too sunny outside",
    "location": "Berlin",
    "image": ""
  },
  {
    "tag": "Me",
    "title": "D-Day",
    "date": 3,
    "blurb": "Its too sunny outside",
    "location": "Berlin",
    "image": ""
  },
  {
    "tag": "Me",
    "title": "Liberation of Auchwitz",
    "date": 3,
    "blurb": "Its too sunny outside",
    "location": "Berlin",
    "image": ""
  },
  {
    "tag": "Me",
    "title": "Germany Surrender",
    "date": 3,
    "blurb": "Its too sunny outside",
    "location": "Berlin",
    "image": ""
  },
  {
    "tag": "Me",
    "title": "Hiroshima Atomic Bombing",
    "date": 3,
    "blurb": "Its too sunny outside",
    "location": "Berlin",
    "image": ""
  }
])
