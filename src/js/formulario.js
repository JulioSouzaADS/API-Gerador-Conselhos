    let idConselho = document.querySelector ('#id-conselho')
    console.log (idConselho)
    let exibirConselho = document.querySelectorAll("#conteudo-conselho")
    console.log (exibirConselho)
    let btn = document.querySelector ('#submit')
    const url = 'https://api.adviceslip.com/advice';

    async function addCOnselho(url) {  /* consigo pega com o parametro url da const url*/
      const respostaApi = await fetch(url)
      // apiDados = await respostaApi.json() /* aqui conseguir pegar o conteudo do objeto para utlizar */
      // console.log (apiDados) /* */
      return await respostaApi.json() /* aqui e retornado todos os dados do objeto da APi */
    }
/* */
    addCOnselho(url)

    btn.addEventListener('click',async function(){
      const dadosApi = await addCOnselho(url)
      idConselho.innerHTML = ` CONSELHO#ID ${dadosApi.slip.id}`
      exibirConselho[0].innerText = ` " ${dadosApi.slip.advice} "`
    }) 

    async function conselhoInicial () {
      const dadosApi = await addCOnselho(url)
      idConselho.innerHTML = ` CONSELHO#ID ${dadosApi.slip.id}`
      exibirConselho[0].innerText = ` " ${dadosApi.slip.advice} "`
    }
    conselhoInicial ()