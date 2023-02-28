const myBookShowList = () => {
  const myListShow = document.getElementById('mylistshow');
  const myTitleText = document.getElementById('text');
  const myBookHide = document.getElementById('list-holder');
  const myInputSection = document.getElementById('myinputs');
  const myContact = document.getElementById('mycontact');

  myInputSection.style.display = 'none';
  myContact.style.display = 'none';

  function myBooksAll() {
    myTitleText.style.display = 'block';
    myBookHide.style.display = 'block';
    myInputSection.style.display = 'none';
    myContact.style.display = 'none';
  }

  myListShow.addEventListener('click', myBooksAll);
};

export default myBookShowList;