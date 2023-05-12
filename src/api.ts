const conta  = {
  email: 'paulo@dio.me',
  password: '123456',
  name: 'Paulo Santos',
  balance: 3000.00,
  id:'1'
}

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta)
  }, 3000);
})