async function funcioPromesaAwaitTimeout(){

    let miPromesa = new Promise(resolver =>{

        setTimeout(()=> resolver('promesa con await y timeout'),3000)
    });

    console.log(await miPromesa)

}

funcioPromesaAwaitTimeout();

