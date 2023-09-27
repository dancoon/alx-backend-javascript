import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const uploadPhotoPromise = uploadPhoto();
  const createUserPromise = createUser();
  return Promise.all([uploadPhotoPromise, createUserPromise])
    .then((values) => { console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`); })
    .catch(() => { console.error('Signup system offline'); });
}
