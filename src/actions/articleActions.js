export const addArticle = (article) => {
  // Return action
  return {
    // Unique identifier
    type: 'ADD_ARTICLE',
    // Payload
    article: article
  }
};

export const deleteArticle = (id) => {
  // Return action
  return {
    // Unique identifier
    type: 'DELETE_ARTICLE',
    // Payload
    id: id
  }
};
