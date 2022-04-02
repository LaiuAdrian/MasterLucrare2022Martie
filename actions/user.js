import * as firebase from 'firebase';
import db from '../config/firebaseConfig';


//Create new account
export const  umsCreateAccount = (userObj) =>{
    return async (dispatch) =>{
        try{
            /**
             * 1) preia datele din obiectul trimis din formular
             * 2) introducem datele utilizatorului in firebase auth sistem
             * 3) preluam uid unic creeat si adaugam datele aferente in db
             */
            const response = await firebase.auth().createUserWithEmailAndPassword(userObj.email,userObj.password) 
            
            if(response.user.uid){
                //dupa ce a adaugat utilizatorul in sistemul lor obicetul acestuia cu id unic va fi salvat in db
                const umsUser = {
                    uid:response.user.uid,
                    nume:userObj.nume,
                    email:userObj.email,
                    role:userObj.role,
                    photo:userObj.photo,
                    coverPhoto:userObj.coverPhoto,
                    facultate:userObj.facultate,
                    tip_studii:userObj.tip_studii,
                    domeniu:userObj.domeniu,
                    specializarea:userObj.specializarea,
                    an:userObj.an,
                    grupa:userObj.grupa,
                    favPost:[],
                    createdPost:[]
                }
                //salveaza datele in db
                await  db.collection('users').doc(response.user.uid).set(umsUser);
                //salveaza datele in aplication storage sistem
                dispatch({type:'GET_LOGGED_UMS_USER_DATA',payload:umsUser});
                //success creare cont alert
                alert('Utilizator nou creeat cu success!!!')
            }


        }catch(e){
            alert(e)
        }
    }
}

export const loginAccount = (loginOBj) =>{
    return async (dispatch) =>{
        console.log(loginOBj)
        const response = await firebase.auth().signInWithEmailAndPassword(loginOBj.email,loginOBj.password); 
        if(response.user.uid){
            const queryUmsUsers = await db.collection('users').doc(response.user.uid).get();
            //salveaza datele in aplication storage sistem
            dispatch({type:'GET_LOGGED_UMS_USER_DATA',payload:queryUmsUsers.data()});
            //success creare cont alert
            alert('Utilizatorsa logat  cu success!!!')
        }
    }
}


// use function to sign out from firebase auth and remove data from store 
export const loggOut = () =>{
    return async (dispatch) =>{
        firebase.auth().signOut()
        dispatch({type: 'GET_LOGGED_UMS_USER_DATA', payload:[]});
    }
}

