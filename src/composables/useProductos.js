import {collection, doc, deleteDoc} from 'firebase/firestore'; 
import { ref as storageRef, deleteObject } from 'firebase/storage'; 
import { useFirestore, useCollection, useFirebaseStorage } from 'vuefire'; 

export default function useProductos() {

  const storage = useFirebaseStorage() 
  const db = useFirestore(); 
  const productosCollection = useCollection(collection(db, 'productos')); 


  
  async function deleteItem(id, urlImage) {
    console.log('ey');
    if(confirm('¿Deseas eliminar este producto?')) {
        const docRef = doc(db, 'productos', id)
        const imageRef = storageRef(storage, urlImage)
        
        await Promise.all([
            deleteDoc(docRef),
            deleteObject(imageRef)
        ])
    }
}
  return {
    productosCollection,
    deleteItem
  }
}
