const myShowContactView = () => {
  const myTitleText = document.getElementById('text');
  const myBookHide = document.getElementById('list-holder');
  const myInputSection = document.getElementById('myinputs');
  const myContactView = document.getElementById('mycontactview');
  const myContact = document.getElementById('mycontact');

  function myContactShow() {
    myContact.style.display = 'block';
    myTitleText.style.display = 'none';
    myBookHide.style.display = 'none';
    myInputSection.style.display = 'none';
  }

  myContactView.addEventListener('click', myContactShow);
};

export default myShowContactView;