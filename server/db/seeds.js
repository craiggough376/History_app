use history_app;
db.dropDatabase();

db.events.insertMany([
  {
    "tag": "Me",
    "title": "I ate a sandwich",
    "date": 1,
    "blurb": "Hello, i ate a sandwich.",
    "location": "London",
    "image": ""
  },
  {
    "tag": "Me",
    "title": "Its sunny outside",
    "date": 3,
    "blurb": "Its too sunny outside",
    "location": "Berlin",
    "image": ""
  },
  {
    "tag": "Him",
    "title": "Tim has a podcast",
    "date": 2,
    "blurb": "Im going to listen to tims podcast",
    "location": "Glasgow",
    "image": ""
  }
])
