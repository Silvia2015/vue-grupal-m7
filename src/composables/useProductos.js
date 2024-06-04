import {collection,doc,deleteDoc} from 'firebase/firestore';
import {ref as storageRef,deleteObject} from 'firebase/storage';
import {useFirestore,useCollection,useFirebaseStorage} from 'vuefire';

export default function useProductos(){

    const storage = useFirebaseStorage()
    const db = useFirestore();
    const productosCollection = useCollection(collection(db, 'productos'));
    console.log(productosCollection)
    return {
        productosCollection
    }

}
