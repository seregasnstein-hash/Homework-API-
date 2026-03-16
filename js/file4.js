let cardsUser = document.querySelector('.cards');



async function getData() {
  try {
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    let arrUsers = data.users
    console.log(arrUsers);
    for(let i = 0; i < arrUsers.length; i++){

        let divCard = document.createElement('div');
        divCard.classList.add('card')
        cardsUser.append(divCard);

        let userName = document.createElement('p');
        userName.classList.add('user__name')
        userName.innerText = arrUsers[i].firstName;
        divCard.append(userName);

        let userEmail = document.createElement('a');
        userEmail.innerText = arrUsers[i].email;
        userEmail.href = '#'
        divCard.append(userEmail);

        let userAvatar = document.createElement('img');
        userAvatar.classList.add('user__avatar');
        userAvatar.src = arrUsers[i].image;
        divCard.append(userAvatar)
    }
  } catch (error) {
    console.log(error);
  }
}
getData();
