import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'addBlogPost':
      return [...state, { id: Math.floor(Math.random() * 99999), title: action.payload.title, content: action.payload.content }]
    case 'deleteBlogPost' :
      return state.filter((blogPost) => blogPost.id !== action.payload)
    default:
      return state
  }
}

const addBlogPost = (dispatch) => {
  return(
    (title, content, callback) => {
      dispatch({ type: 'addBlogPost', payload: { title, content } });
      callback();
    }
  )
}

const deleteBlogPost = (dispatch) => {
  return(
    (id) => {
      dispatch({ type: 'deleteBlogPost', payload: id })
    }
  )
}

  // The provider passes down all relevant data and functions to the children that need it
  // Put the state that needs changing there

export const { Context, Provider } = createDataContext(
  blogReducer, { addBlogPost, deleteBlogPost }, [{title: 'Test Post', content: 'Test Content', id: 1}]
);