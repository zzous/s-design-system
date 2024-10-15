export const getLastItem = (targetArr) => {
    try{
        return targetArr[targetArr.length - 1]
    }catch(e){
        return null
    }
}