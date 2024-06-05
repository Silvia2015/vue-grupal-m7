import { computed, ref } from 'vue';
import { ref as storageRef, getDownloadURL } from 'firebase/storage'; 
import { useFirebaseStorage, useStorageFile } from 'vuefire'; 
import { uid } from 'uid'; 

export default function useImage() {
  const storage = useFirebaseStorage(); 

  let storageRefPath;
  const url = ref(null);
  const uploadError = ref(null);
  const uploadProgress = ref(0);

  async function uploadImage(event) {
    const data = event.target.files[0]; 
    console.log('Select file:', data);

    if (data) {
      const fileExtension = data.name.split('.').pop(); // Obtiene la extensión del archivo
      storageRefPath = storageRef(storage, `/productos/${uid()}.${fileExtension}`);  
      console.log(storageRefPath);

      const {
        upload, 
        uploadError: ue,
        uploadProgress: up
      } = useStorageFile(storageRefPath);

      try {
        await upload(data);
        const downloadUrl = await getDownloadURL(storageRefPath); 
        console.log('Image uploaded successfully: ', downloadUrl);
        url.value = downloadUrl;
        uploadError.value = null;
        uploadProgress.value = 100;
      } catch (error) {
        console.error('Error uploading image:', error);
        uploadError.value = ue;
        uploadProgress.value = up;
      }
    }
  }

  const image = computed(() => {
    return url.value ? url.value : null;
  });

  return {
    url, 
    uploadImage,
    image,
    uploadError,
    uploadProgress
  };
}