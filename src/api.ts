const conta = {
  email: 'yas@email.br',
  password: '1234',
  nome: 'Yasmine'
}

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta)
  }, 3000)
})

