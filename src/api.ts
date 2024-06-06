const conta = {
  email: 'yas@email.br',
  password: '1234',
  name: 'Yasmine Fortes',
  balance: 2000.00,
  id: '1'
}

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta)
  }, 3000)
})

