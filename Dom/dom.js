// getting elements by tag name
console.log('getting elements by tag name')
const allTitles = document.getElementsByTagName('h1')
console.log(allTitles)
for (let i = 0; i < allTitles.length; i++) {
    console.log(allTitles[i])
}

const elementByQueryP = document.getElementsByTagName('p')
console.log(elementByQueryP)
for (let i = 0; i < elementByQueryP.length; i++) {
    console.log(elementByQueryP[i])
}

//getting element by class name
console.log('getting element by class name')

const elementsBytags = document.getElementsByClassName('title')
console.log(elementsBytags)
for (let i = 0; i < elementsBytags.length; i++) {
    console.log(elementsBytags[i])
}

//Getting element by Id name
console.log('getting element by Id name')

const elementById = document.getElementById('first-title')
console.log(elementById)

// Getting elements by using querySelector using tag, class and id:
console.log('=====Getting elements by using querySelector using tag, class and id:=====')
const elementByQueryTag = document.querySelector('h1')
const elementByQueryId = document.querySelector('#second-title')

console.log(elementByQueryTag)
console.log(elementByQueryId)

console.log('=====Getting elements by using querySelector class=====')
const elementByQueryClass = document.querySelector('.title')
console.log(elementByQueryClass)
for (let i = 0; i < elementByQueryClass.length; i++) {
    console.log(elementByQueryClass[i])
}
console.log('=====Getting elements by using querySelectorAll=====')
const elementByQueryAll = document.querySelectorAll('p')
for (let i = 0; i < elementByQueryAll.length; i++) {
    console.log(elementByQueryAll[i])
}
// Adding attribute
console.log('======Adding attribute======')
const addingAttribute = document.querySelectorAll('p')
console.log(addingAttribute)
for (let i = 0; i < addingAttribute.length; i++) {
    console.log(addingAttribute[i])
}
addingAttribute[0].setAttribute('class', 'para-title')
addingAttribute[1].setAttribute('class', 'para-title2')
console.log(addingAttribute[0])
console.log(addingAttribute[1])

// Adding attribute without setAttribute
console.log('======Adding attribute without setAttribute======')
const addingAttributeWithoutSetAtt = document.querySelectorAll('p')
addingAttributeWithoutSetAtt[0].className = 'para-tite-1'
addingAttributeWithoutSetAtt[1].className = 'para-titel-2'
console.log(addingAttributeWithoutSetAtt[0])
console.log(addingAttributeWithoutSetAtt[1])

console.log('======Adding class/multiple using classList======')
addingAttributeWithoutSetAtt[0].classList.add('para-tite-1', 'p-title', 'p-title-3', 'p-title-4')
addingAttributeWithoutSetAtt[1].classList.add('para-title-2')
console.log(addingAttributeWithoutSetAtt[0])
console.log(addingAttributeWithoutSetAtt[1])

console.log('==== Adding Text Content====')
const addText = document.querySelectorAll('h2')
addText[0].style.color = 'green'
addText[0].className = 'heading-2'
addText[1].className = 'heading-2'
addText[0].textContent = 'My paragraph title-1'
addText[1].textContent = 'My paragraph title -2'
console.log(addText[0])
console.log(addText[1])

console.log('==== Adding style ====')
// Lets add some style to our titles. If the element has even index we give it green color else red.
const addStyle = document.querySelectorAll('h2')
addStyle.forEach((element, i) => {
    if (i % 2 === 0) {
        element.style.color = 'green';
    } else {
        element.style.color = 'red'
    }
})
console.log(addStyle)

// const addStyle = document.querySelectorAll('h2')
// for (let i = 0; i < addStyle.length; i++) {
//     addStyle.className = 'classFor'
//     if (i % 2 === 0) {
//         classFo.style.color = 'green';
//     } else {
//         classFor.style.color = 'red';
//     }
// }
// console.log(addStyle)

console.log('====Creating an Element====')
let createEle = document.createElement('h1')
console.log(createEle)
createEle.textContent = ' This is first created content and element in JS'

console.log('====Creating 10 Elements through loop ====')
let creatTenEle;
for (let i = 0; i < 10; i++) {
    creatTenEle = document.createElement('h2')
    creatTenEle.textContent = 'This is created loop elements in JS' + '-' + i
    document.body.appendChild(creatTenEle)
    if (i % 2 === 0) {
        creatTenEle.style.color = 'green'
    } else {
        creatTenEle.style.color = 'red'
    }
}


console.log('====Creating Elements through loop ====')

let myElements
for (let i = 0; i < 10; i++) {
    myElements = document.createElement('h2')
    myElements.textContent = 'My Elements -' + i
    document.body.appendChild(myElements)
    myElements.style.width = '250px'
    myElements.style.textAlign = 'center'
    myElements.style.padding = '20px'
    if (i % 2 === 0) {
        myElements.style.color = '#fff'
        myElements.style.background = 'red'

    } else {
        myElements.style.color = '#fff'
        myElements.style.background = 'green'
    }
}