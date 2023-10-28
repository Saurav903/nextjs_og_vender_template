import axios from "axios";

export const uploadImageAndGetURL = (imageFile) => {
  return new Promise(async (resolve, reject) => {
    const formData = new FormData();
    formData.append("image", imageFile);
    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_API}`,
        formData
      );
      const imageURL = response.data.data.display_url;
      resolve(imageURL);
    } catch (error) {
      reject(error);
    }
  });
};
