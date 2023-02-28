const myRedirectButton = () => {
  const myTitleText = document.getElementById('text');
  const myBookHide = document.getElementById('list-holder');
  const myInputSection = document.getElementById('myinputs');
  const myRedirectBttn = document.getElementById('bttn');
  const myContact = document.getElementById('mycontact');

  myInputSection.style.display = 'none';
  myContact.style.display = 'none';

  function myButtonRedirect() {
    myTitleText.style.display = 'block';
    myBookHide.style.display = 'block';
    myInputSection.style.display = 'none';
  }

  myRedirectBttn.addEventListener('click', myButtonRedirect);
};

export default myRedirectButton;