export const state = () => ({
    list: [],
})

export const mutations = {
    set(state, list) {
        state.list = list
    }
}

export const getters = {
    list(state) {
        return state.list
    }
}

export const actions = {
    get(context) {
        context.commit('setLoading', true, { root: true })
        this.$fireStore.collection("categories")
            .orderBy('order', 'asc')
            .get()
            .then((querySnapshot) => {
                let docs = []
                querySnapshot.forEach((doc) => {
                    docs.push(doc.data())
                });
                context.commit('set', docs)
            })
            .catch(err => console.log(err))
            .finally(() => context.commit('setLoading', false, { root: true }));
    }
}