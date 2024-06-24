const {readFile , writeFile} = require ('fs')

console.log('start')
readFile('./content/first.txt',(err,result)=>{
    if(err){
        console.log(err)
        return
    }                                                                            //multiple callbacks  used
    const first = result
    
    readFile('./content/second.txt',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result-sync.txt',
            `Here is the result:${first},${second}`,
            (err,result)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log('done with the task')
            }
        )
    })
})
console.log('starting the next one ')
