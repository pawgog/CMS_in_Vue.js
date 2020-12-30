import PostList from '../components/Post/List';
import PostDetails from '../components/Post/Details';
import PostEdit from '../components/Post/Edit';
import PostAdd from '../components/Post/Add';
import NotFound from '../components/General/404';

export default [
  { path: '/', component: PostList, name: "home" },
  { path: '/post/:slug', component: PostDetails, name: "post", props: true },
  { path: '/post/:slug/edit', component: PostEdit, name: "postEdit", props: true },
  { path: '/post', component: PostAdd, name: "postAdd", props: true },
  { path: '/404', component: NotFound, name: "404", props: true },
];
