import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        state: {
            count: 0,
            todos: [
                { id: 1, text: '...', done: true },
                { id: 2, text: '...', done: false }
            ]
        },
        mutations: {
            // increment: state => state.count++
            increment(state) {
                state.count++
            }
        },
        getters: {
            doneTodos: state => {
                return state.todos.filter(todo => todo.done)
            }
        }
    })
}