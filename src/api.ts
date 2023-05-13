export interface IConta {
  email: string,
  password: string,
  name: string,
  balance: number,
  id: string;
}

const conta : IConta = {
  email: 'paulo@dio.me',
  password: '123456',
  name: 'Paulo Santos',
  balance: 3000.00,
  id:'1'
}

export const api= new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta)
  }, 3000);
})