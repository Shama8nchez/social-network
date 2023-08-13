import { addPostAC, typePostAC } from '../../../redux/profileReducer';
import Posts from './Posts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    posts: state.postsDB.posts,
    newPost: state.postsDB.newPost
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostAC()),
    typePost: (newText) => dispatch(typePostAC(newText))
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;