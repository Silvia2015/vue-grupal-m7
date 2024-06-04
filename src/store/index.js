import {createStore} from 'vuex';
import {firebaseApp} from '../config/firebase';
import {getAuth,signInWithEmailAndPassword,onAuthStateChanged,signOut} from 'firebase/auth';

const auth = getAuth(firebaseApp);

export default createStore({
    state() {
        return {
            authUser:null,
            errorMsg:''
        }
    },
    mutations: {
        setAuthUser(state,user) {
            state.authuser = user;
        },
       setErrorMsg(state,message) {
        state.errorMsg = message
       }
    },
    actions: {
        login({commit},{email,password,router}) {
         signInWithEmailAndPassword(auth,email,password).then(userCredential => {
            commit('setAuthUser',userCredential.user);
             router.push({name:'admin-productos'})
         })
         .catch(error => {
           // console.log(error);
            commit('setErrorMsg', 'Credenciales incorrectas')
         })
        }
    },
    getters: {

    }
})