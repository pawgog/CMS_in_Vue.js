const express = require('express');
const cors = require('cors');
const app = express();
const { v4: uuidv4 } = require('uuid');

let posts = [
  {
    content: 'Content first paragraph.',
    title: 'Title 1',
    date: '2009-07-23',
    slug: 'title-first-item',
    id: 'Frt4R2gVH',
  },
  {
    content: 'Content second paragraph.',
    title: 'Title 2',
    date: '2011-02-05',
    slug: 'title-second-item',
    id: 'ji3SGvc6Jok',
  },
];

app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

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

app.get('/post/:slug/add', (req, res) => {
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

app.put('/post/:id', (req, res) => {
  const id = req.params.id;
  const newPost = req.body;

  for (let i = 0; i < posts.length; i++) {
      let post = posts[i]
      if (post.id === id) {
        posts[i] = Object.assign(newPost, {slug: posts[i].slug});
        return posts[i].slug
      }     
  }

  res.send('Post is edited');
});

app.post('/posts', (req, res) => {
  const id = uuidv4();
  const slug = req.body.title.toLowerCase().split(' ').join('-');
  const post = {
    content: req.body.content,
    title: req.body.title,
    date: req.body.date,
    slug,
    id
  };

  posts.push(post);
  return res.send(post);
});

app.delete('/post/:postId', (req, res) => {
  const newPostList = posts.find(val => val.id !== req.params.id);
  
  return res.send(newPostList);
});

app.listen(4001, () => console.log(`Start server 4001.`));
