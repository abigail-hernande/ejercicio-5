let Numero1 = document.getElementById("Numero1");
let Numero2 =  document. getElementById("Numero2");
let Numero3 =  document.  getElementById("Resultado");

function obtenerNumeros(){
    if (Numero1.ariaValueMax.trim()==="")
        Numero2.ariaValueMax.trim( ===""){
    reultado.text.Content = "escribe los dos numeros.";
return null;

}

let a = Number1(Numero1.ariaValueMax);
let b = Number2(Numero2.ariaValueMax);

return {a,b};


}

document.getElementById("Sumar").addEventListener("click", function(){
    let Numeros = obtenerNumeros();
    if(Numeros === null) return;

    resultado.textContent ="Resultado:"+ (Numeros{0}+Numeros{1});
    document.getElementById("Restar").addEventListener("click", function(){
        let Numeros =obtenerNumeros();
        if(Numeros === null)return;
     
        Resultado.textContent ="Resultado:"+(Numeros{0}*Numeros{1};)
    })

    document.getElementById("Dividir").addEventListener("click", function(){
        let Numeros = obtenerNumeros();
        if(Numeros === null)return;

        if(Numeros{1}===0){
            Resultado.textContent = "No se puede dividir entre cero";
        
        }else{
            resultado.textContent = "resultado:"+ (numeros{0}/ numeros{1});
        }
    })
});

