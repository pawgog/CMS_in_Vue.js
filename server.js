const express = require('express');
const cors = require('cors');
const app = express();

let posts = [
  {
    content: 'Content first paragraph.',
    title: 'Title 1',
    date: '23-07-2009',
    slug: 'title-first-item',
    id: 'Frt4R2gVH',
  },
  {
    content: 'Content second paragraph.',
    title: 'Title 2',
    date: '05-02-2011',
    slug: 'title-second-item',
    id: 'ji3SGvc6Jok',
  },
];

app.use(cors());

app.get('/posts', (req, res) => {
  return res.send(Object.values(posts));
});

app.listen(4001, () => console.log(`Start server 4001.`));
