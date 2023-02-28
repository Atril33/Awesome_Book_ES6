const myAddBookList = () => {
  const myAddBooks = document.getElementById('myaddbooks');
  const myTitleText = document.getElementById('text');
  const myBookHide = document.getElementById('list-holder');
  const myInputSection = document.getElementById('myinputs');
  const myContact = document.getElementById('mycontact');

  function myBookAdd() {
    myTitleText.style.display = 'none';
    myInputSection.style.display = 'block';
    myBookHide.style.display = 'none';
    myContact.style.display = 'none';
  }

  myAddBooks.addEventListener('click', myBookAdd);
};

export default myAddBookList;