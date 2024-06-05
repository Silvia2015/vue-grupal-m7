import { createStore } from 'vuex';
import { firebaseApp } from '../config/firebase';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

const auth = getAuth(firebaseApp); 

export default createStore({
  state() {
    return {
      authUser: null,
      errorMsg: ''
    }
  }, 
 
  mutations: {
    setAuthUser(state, user) {
      state.authUser = user;
    },
    setErrorMsg(state, message) {
      state.errorMsg = message
    }
  },

  actions: {
    login({commit}, { email, password, router }) {
      signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          commit('setAuthUser', userCredential.user);
          router.push({name: 'home'})
        })
        .catch( error => {
          console.error(error);
          commit('setErrorMsg', 'Credenciales Incorrectas')
        })
    },
    logout({commit}, router) {
      signOut(auth).then( () => {
        commit('setAuthUser', null);
        router.push({name: 'login'})
      }).catch(error => console.error(error))
    },
    register({commit}, { email, password, router }) {
     
      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          commit('setAuthUser', userCredential.user);
          router.push({name: 'home'}) 
        })
        .catch( error => {
          console.error(error);
          commit('setErrorMsg', 'Error al crear la cuenta')
        })
    },
    initAuth({ commit }) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          commit('setAuthUser', user);
        }
      });
    }
  }, 
  getters: {
    isAuthenticated: state => !!state.authUser,
  }
})