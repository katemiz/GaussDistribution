let boxNo = 9;
let cycleNo = 100;



window.onload = function() {

  document.getElementById("boxNo").innerHTML = boxNo
  document.getElementById("cycleNo").innerHTML = cycleNo

  let g = new Gauss(boxNo,cycleNo)
  g.RunProgram()

};

function Refresh(boxNoInc, cycleNoInc) {

  let boxNoValue = document.getElementById("boxNo")
  let cycleNoValue = document.getElementById("cycleNo")

  if (boxNoInc) {

    if (boxNoInc == 1) {
      boxNoValue.innerHTML = parseInt(boxNoValue.innerHTML) + 2
    } else {
      boxNoValue.innerHTML = parseInt(boxNoValue.innerHTML) - 2
    }
  }


  if (cycleNoInc) {

    if (cycleNoInc == 1) {
      cycleNoValue.innerHTML = parseInt(cycleNoValue.innerHTML) * 10
    } else {
      cycleNoValue.innerHTML = parseInt(cycleNoValue.innerHTML) / 10
    }
  }



  if (parseInt(document.getElementById("boxNo").innerHTML) > boxNo) {
    document.getElementById("minusBoxNo").classList.remove('is-hidden')
  } else {
    document.getElementById("minusBoxNo").classList.add('is-hidden')
  }

  if (parseInt(cycleNoValue.innerHTML) > cycleNo) {
    document.getElementById("minusCycleNo").classList.remove('is-hidden')
  } else {
    document.getElementById("minusCycleNo").classList.add('is-hidden')
  }


  let g = new Gauss()
  g.Refresh(boxNoValue.innerHTML,cycleNoValue.innerHTML)
}



function toggleModal() {
  document.getElementById("modal").classList.toggle('is-active')
}