import authors from '/src/data';

const initialState = {
  authors: authors,
  newAuthorId: "DO YOU NEED ME??"
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
