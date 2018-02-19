export default (state = [], action) => {
  switch (action.type){
    // Check if action dispatched is
    // CREATE_BOOK and act on that
    case 'ADD_ARTICLE':
        return [...state, action.article];
    case 'DELETE_ARTICLE':
        return state.filter(el => el.id !== action.id);
    default:
          return state;
  }
};
