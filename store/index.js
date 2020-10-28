export const state = () => ({
  loading: false,
  user: null
});

export const mutations = {
  setLoading(state, val){
    state.loading = val
  },
  setUser(state, user){
    state.user = user
  }
};

export const getters = {
  loading(state){
    return state.loading
  },
  user(state){
    return state.user
  }
};

export const actions = {
	getUser(context) {
    let user = localStorage.getItem('app_user')
    user =  (user) ? JSON.parse(user) : null
    context.commit('setUser', user)
  }
};
