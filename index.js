

function getValorId(id) {
  return document.getElementById(id).value;
}
function getElementId(id) {
  return document.getElementById(id);
}
function updateValue(id,value){
  return document.getElementById(id).value =value;
}
function contValores() {
  let obj = {
    firstName: getValorId("firstName"),
    lastName: getValorId("lastName"),
    mail: getValorId("mail"),
    total: getElementId("total"),
    selectTick: getValorId("select-tickets"),
    cantidad: getValorId("cantidad"),
  };
  return obj;
}

function resumen() {
  let valores=contValores();
  if (
    valores.firstName === "" ||
    valores.lastName === "" ||
    valores.mail === "" ||
    valores.selectTick === "" ||
    valores.cantidad === ""
  ) {
    return Fillindata();
  } else {
    total.innerHTML = calculo(valores.cantidad, valores.selectTick);
  }
}
function calculo(quantity, selectTickets) {
  let totalPrice = 0;
  const valorTickets = 200;
  const arrayCate = [
    { category: "Estudiante", discount: 0.8 },
    { category: "Trainee", discount: 0.5 },
    { category: "Junior", discount: 0.15 },
  ];
  arrayCate.map((e) => {
    if (e.category === selectTickets) {
      totalPrice =
        valorTickets * quantity - valorTickets * quantity * e.discount;
    }
  });
  return totalPrice;
}
function borrar() {
 let valores=contValores();

    valores.firstName= updateValue("firstName","");
    valores.lastName= updateValue("lastName","");
    valores.mail= updateValue("mail","");
    valores.total= getElementId("total").innerHTML=0;
    valores.selectTick= updateValue("select-tickets","");
    valores.cantidad= updateValue("cantidad","");
}

function Fillindata (){
  let section=getElementId('sect-fillData');
  section.className='sect-fillData'
}
function removeData(){
  let section=getElementId('sect-fillData');
  section.classList.remove('sect-fillData');
  section.className='noneFillData'
}



document.getElementById("btn-resumen").addEventListener("click", resumen);
document.getElementById("btn-borrar").addEventListener("click", borrar);
document.getElementById("cont-icon").addEventListener("click", removeData);
