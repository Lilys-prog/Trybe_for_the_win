import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';
// Lógica para pegar as informações das pessoas usuárias e preencher o select aqui

usersSelect.addEventListener('change', () => {
  clearPageData();
  const UserID = usersSelect.value;

  // Lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
});
