const burbuja = arr => {                                       
    const longitud = arr.length;                         
    let ordenado = false;                                       
    for (let i = 0; i < longitud; i++) {              
        ordenado=true;                                          
        for (let j = 0; j < longitud - 1 - i; j++) {          
            if (arr[j] > arr[j + 1]) {                          
                ordenado=false;                                
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        console.log(`Pasada ${i}`);
        console.log(`${arr}`);    
        if(ordenado){                       
            return arr;                     
        }                                  
    }
    
    return arr;                                                
};
//const arr = [1,2,3,4,5,6]
//const arr = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
//const arr = [2,1,3,4,5,6,7,8,9,10];
const arr = ["zacarias","rodriguez","Martinez","Rodriguez","Zacarias","albarez"]
const result = burbuja(arr);