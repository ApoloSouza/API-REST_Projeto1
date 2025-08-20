import app from './src/app.js'

// import conexao from './infra/conexao.js'

const port = 3000

//  Establecer a conexão
// conexao.connect((error) => {
//     if (error) {
//         console.error(error,`Falha na conexao`);
//     } else {
//         console.log (`Conectado com sucesso!`) 
//         //Listening (Escutando)
//         app.listen(port, () => {
//         console.log(`Servidor rodando em http://localhost:${port}`)
// })

//     }

// })

//Listening (Escutando)
app.listen(port, () => {
console.log(`Servidor rodando em http://localhost:${port}`)
})