import { storage } from "@/firebase/config";
import { ref, uploadBytes, getDownloadURL, StorageReference } from "firebase/storage";
import { nanoid } from "nanoid";

export const uploadFile = async (file: File, folder: string): Promise<string> => {
  try {
    const filename = nanoid();
    const storageRef: StorageReference = ref(
      storage,
      `${folder}${filename}.${file.name.split(".").pop()}`
    );
    const res = await uploadBytes(storageRef, file);

    return res.metadata.fullPath;
  } catch (error: any) {
    throw error;
  }
};

export const getFile = async (path: string): Promise<string> => {
  try {
    const fileRef: StorageReference = ref(storage, path);
    const downloadURL: string = await getDownloadURL(fileRef);
    return downloadURL;
  } catch (error: any) {
    throw error;
  }
};
