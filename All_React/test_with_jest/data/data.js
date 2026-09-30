function dataMap(params){
    let value=params.filter((el)=>{
        return el.name ==='abhishek';
    })
    return value
}

module.exports={dataMap}