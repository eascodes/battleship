 // eslint-disable-next-line import/prefer-default-export
 export const Ship = (lengthNum) => {
     const shipLength = lengthNum;
     const hitNum = 0;
     const hit = (obj) => {
        const newObj = {...obj};
        newObj.hitNum = obj.hitNum + 1;
        return newObj;
     }
     const isSunk = (obj) => {
        if (obj.hitNum >= obj.shipLength) {
            return true;
        } 
            return false; 
     }
     return { shipLength, hitNum, hit, isSunk }
 }