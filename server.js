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

class HttpError extends Error {
  constructor(code, message = 'Uh oh, something went wrong.') {
    super(`${message} HTTP code ${code}`);
    this.code = code;
  }
}

app.get('/posts', (req, res) => {
  return res.send(Object.values(posts));
});

app.get('/post/:slug', (req, res) => {
  const getRequest = handleGet(req, res, posts, req.params.slug);
  
  if(typeof getRequest !== 'undefined' && getRequest.length > 0) {
    return res.send(getRequest)
  } else {
    throw new HttpError(404);
  }
});

app.get('/post/:slug/edit', (req, res) => {
  const getRequest = handleGet(req, res, posts, req.params.slug);
  
  if(typeof getRequest !== 'undefined' && getRequest.length > 0) {
    return res.send(getRequest)
  } else {
    throw new HttpError(404);
  }
});

function handleGet(req, res, data, filterItem) {
  if (req.method !== 'GET') {
    throw new HttpError(405);
  }

  return data.filter((item) => {
    if(item.slug === filterItem) {
      return item
    }
  });
}

app.listen(4001, () => console.log(`Start server 4001.`));
