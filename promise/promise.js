// EXAMPLE OF CALLBACK FUNCTION
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('this worked')
  } else {
    reject('there is an error somewhere')
  }
})

// EXAMPLE OF PROMISE
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'hello')
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'felicia')
})
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'what so you want exactly?')
})

Promise.all([promise, promise2, promise3, promise4]).then((values) => {
  console.log(values)
})

promise
  .then((result) => result + '!')
  .then((result2) => {
    throw Error
    console.log(result2)
  })

  .catch(() => console.log('error!'))

promise
  .then((result) => result + '!')
  .then((result2) => {
    throw Error
    console.log(result2)
  })

  .catch(() => console.log('error!'))

promise
  .then((result) => result + '!')
  .then((result2) => result + '!')
  .catch(() => console.log('error!'))
  .then((result3) => {
    console.log(result3 + '!')
  })

promise
  .then((result) => result + '!')
  .then((result2) => result + '!')
  .catch(() => console.log('error!'))
  .then((result3) => {
    throw Error
    console.log(result3 + '!')
  })

// EXAMPLE OF API

const url = 'https://meowfacts.herokuapp.com'

fetch(url.then((resp) => resp.jspn()))
  .then((results) => console.log(results))
  .catch(() => console.log('error!!'))
