document.addEventListener('DOMContentLoaded', () => {
  console.log('Dom loaded');
    table = document.getElementsByTagName('table')[0];
    winnerH2 = document.getElementById('winner');
    fetchData();
})
function fetchData() {
  // body...
  fetch(`http://localhost:3000/a_cappella_groups`)
    .then(res => res.json())
    .then(json => fillTable(json))//returned json in object
}
function fillTable (json) {
  for(let data of json){
    let row = table.insertRow();
    let cellCollege = row.insertCell();
    let cellGroupName = row.insertCell();
    let cellMembership = row.insertCell();
    let cellDivision = row.insertCell();
    let cellWinner = row.insertCell();

    cellCollege.innerText = data.college.name;
    cellGroupName.innerText = data.name;
    cellMembership.innerText = data.membership;
    cellDivision.innerText = data.college.division;
    cellWinner.innerHTML = `<img src ='./assets/trophy.png' data-id=${data.id}>`
    cellWinner.addEventListener('click', displayWinner)
  }

}
function displayWinner(e){
  let winnerRow = e.target.parentNode.parentNode;
  let lastWinner = winnerRow;
  // console.log(lastWinner.childNodes[0]);
  winnerH2.innerText = `${winnerRow.childNodes[0].innerText}, ${winnerRow.childNodes[1].innerText}`
  // let newRowForLastWinner = table.insertRow();
  // for(let i=0;i < lastWinner.childNodes.length;i++){
  //   newRowForLastWinner.insertCell().innerText = lastWinner.childNodes[i].innerText;
  // }
  winnerRow.remove();
  
}
