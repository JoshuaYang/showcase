export const state = () => ({
  list: [],
});

export const mutations = {
  add (state, { id, text }) {
    state.list.push({
      id,
      text,
    });
  },
};
