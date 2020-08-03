import PostList from '../components/Post/List';
import PostDetails from '../components/Post/Details'

export default [
  { path: '/', component: PostList, name: "home" },
  { path: '/post/:slug', component: PostDetails, name: "post", props: true },
];
