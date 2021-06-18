let AllEnteries=[]
const goal=75
document.querySelector('#target').innerText=goal
const entriesWrapper=document.querySelector('#entries')
function addNewEntry(newEntry){
    entriesWrapper.removeChild(entriesWrapper.firstElementChild)
  const listitem=  document.createElement('li')
 const listvalue= document.createTextNode(newEntry.toFixed(1))
 listitem.appendChild(listvalue);
 entriesWrapper.appendChild(listitem)

}

function reducer(total ,currentValue){
return total+currentValue;
}
function CalcTotal(AllEnteries){
 const   totalValue= (AllEnteries.reduce(reducer)).toFixed(1)
    document.querySelector('#Total').innerText= totalValue;
    document.querySelector('.progressTotal').innerText=totalValue
}

function CalcAverage(){
    const average=(AllEnteries.reduce(reducer)/AllEnteries.length).toFixed(1);
    document.querySelector('#average').innerText=average;

    
}
function weeklyHigh(){
    const high=Math.max(...AllEnteries)
    document.querySelector('#high').innerText=high
}
function CalcGoal(){
    const totalValue= (AllEnteries.reduce(reducer)).toFixed(1)
 const CompletePercent=    ((totalValue/goal)*100).toFixed(1)
 const progressCircle= document.querySelector('#progressCircle')
 if(CompletePercent>100)
 {CompletePercent=99   }
 else if(CompletePercent===100){
    CompletePercent=0;
 }
 progressCircle.style.background=`conic-gradient(#70db70 ${CompletePercent}%, #2d3740 ${CompletePercent}%)`

}

function handleSubmit(event){
 event.preventDefault();

   const entry= Number(document.querySelector('#entry').value);
   if (!entry) return;
   document.querySelector('form').reset()
   AllEnteries.push(entry)
   addNewEntry(entry)
CalcTotal(AllEnteries);
CalcAverage(AllEnteries);
weeklyHigh()
CalcGoal()
if(AllEnteries.length>=7){
    AllEnteries.length=0;
}

console.log(AllEnteries)
}

const form=document.querySelector('form')
form.addEventListener('submit',handleSubmit)
