let peopleInput = document.getElementById("people-input")
let amountInput = document.getElementById("amount-input")
let customInput = document.getElementById("custom-percent")
let fivePercent = document.getElementById("five-percent")
let tenPercent = document.getElementById("ten-percent")
let fifteenpPercent = document.getElementById("fifteen-percent")
let twentyFivePercent = document.getElementById("twenty-five-percent")
let fiftyPercent = document.getElementById("fifty-percent")
let perPersonDisplay =document.getElementById("person-amount-display")
let totalDisplay =document.getElementById("total-amount-display")
let reset = document.getElementById("reset")
let errorMessage = document.getElementById('error-message')


let tip,totalTip,tipPercent,tipPerPerson
function displayError(){
    errorMessage.style.display = 'block'
    peopleInput.style.border = 'thin solid #e43c3cbb'
}

function removeError(){
    reset.style.backgroundColor = '#26c0ab'
    errorMessage.style.display = 'none'
    peopleInput.style.border = 'none'
    reset.style.opacity = '1'
}

function tipCalculator(tipPercent){
    if (peopleInput.value === ''){
       displayError()
    }else{
        removeError()
        totalTip  = parseFloat(amountInput.value) * tipPercent
        tipPerPerson = totalTip / parseFloat(peopleInput.value)
        perPersonDisplay.textContent= '$'+ parseFloat(tipPerPerson).toFixed(2)
        totalDisplay.textContent= '$'+  parseFloat(totalTip).toFixed(2)
    }
}

if (customInput.value === ''){
    fivePercent.addEventListener('click',()=>{
        customInput.value = 'Custom'
        tipCalculator(0.05)
    })
    tenPercent.addEventListener('click',()=>{
        customInput.value = 'Custom'
        tipCalculator(0.1)
    })
    fifteenpPercent.addEventListener('click',()=>{
        customInput.value = 'Custom'
        tipCalculator(0.15)

    })
    twentyFivePercent.addEventListener('click',()=>{
        customInput.value = 'Custom'
        tipCalculator(0.25)
    })
    fiftyPercent.addEventListener('click',()=>{
        customInput.value = 'Custom'
        tipCalculator(0.5)
    })
}

function customTipPercent(){
    customInput.addEventListener('keydown',(e)=>{
        if (e.key === 'Enter'){
            if (peopleInput.value === ''){
                displayError()
            }else{
                removeError()
                tipPercent = parseFloat(customInput.value)/100
                tipCalculator(tipPercent)
            }
        }
    })
    peopleInput.addEventListener('keydown',(e)=>{
        if (e.key === 'Enter' && customInput.value !== ''){
            tipPercent = parseFloat(customInput.value)/100
            tipCalculator(tipPercent)
        }
        
    })
}
customTipPercent()

reset.addEventListener('click',()=>{
    amountInput.value = ''
    peopleInput.value = ''
    customInput.value = 'Custom'
    perPersonDisplay.textContent = '$0.00'
    totalDisplay.textContent = '$0.00'
    reset.style.opacity = '0.2'
})


