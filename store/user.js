export const state = () => ({
  token: ''
});

export const mutations = {
  init(state, token) {
    state.token = token;
  }
};

export const getters = {
  isLogin(state) {
    return !!state.token;
  }
};

// export const actions = {
//   login({ commit, getters }, u) {
//     return this.$axios.$post("/api/login",u).then(({ token }) => {
//       if (token) {
//         commit("init", token);
//       }
//       return getters.isLogin;
//     });
//   }
// };

//使用插件
export const actions = {
  login({ commit, getters }, u) {
    return this.$login(u).then(({ token }) => {
      if (token) {
        commit("init", token);
      }
      return getters.isLogin;
    });
  }
};