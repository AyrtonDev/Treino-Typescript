function fazerRequisicao(url: string, method: 'GET' | 'POST'){
   // ....
}

type RequestDetails = {
   url: string,
   method: 'GET' | 'POST'
} 

let req: RequestDetails = { url: 'https://google.com.br', method: 'GET'}
fazerRequisicao(req.url, req.method)

//Inferencia literal é para definir de maneira mais eficaz valores, para quem fuja do padrao que deve ser recebido