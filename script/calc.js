const botoesNumeros = document.querySelectorAll(".botao__numeros"); 
const botoesOperacoes = document.querySelectorAll(".botao__operacao");
const tela = document.querySelector("input");
const caracteres = ["/","*","+","-"];

function ativaTecladoNumerico() {
    botoesNumeros.forEach(botao => {
        botao.addEventListener("click", () => {
            tela.value += botao.value;
        })
    })
}

function ativaTecladoCaracteres() {
    botoesOperacoes.forEach(carc => {
        carc.addEventListener("click", () => {
            if(carc.textContent==="RESET") {
                limpaTela();
            } else if(carc.textContent==="±") {
                tela.value = tela.value*(-1);
            } else if(carc.textContent==="÷") {
                tela.value += "/";
                naoRepeteCaracter();
            } else if(carc.textContent==="x") {
                tela.value += "*";
                naoRepeteCaracter();
            } else if(carc.textContent==="DEL") {
                apagaTela();
            } else if(carc.textContent===".") {
                if(tela.value.includes(".")) {
                    tela.value = tela.value;
                } else {
                    tela.value += ".";
                }
            } else {
                tela.value += carc.textContent;
                naoRepeteCaracter();
            }
        })
    })
}

function limpaTela() {
    tela.value = "";
}

function apagaTela() {
    if(tela.value.length >= 1) {
        let tamanho = tela.value.length;
        tela.value = tela.value.substring(0,tamanho-1);
    }
}

function naoRepeteCaracter() {
    for(let i=0; i < tela.value.length; i++) {
        let novoCaracter = tela.value[i];
        if(caracteres.includes(tela.value[i-1])) {
            let tamanho = tela.value.length;
            tela.value = tela.value.substring(0,tamanho-2);
            tela.value += novoCaracter;
            console.log(novoCaracter);
        } else {
            tela.value = tela.value;
            console.log(novoCaracter);
        }
    }
}

// function mudaCaracter() {
//     for(let i=0; i < tela.value.length; i++) {
//         if(caracteres.includes(tela.value[i])) {
//             let tamanho = tela.value.length;
//             tela.value = tela.value
//         }
//     }
// }

ativaTecladoNumerico();
ativaTecladoCaracteres();

// function naoRepeteCaracteres() {
//     for(let i=0; i < tela.value.length; i++) {
//         if(tela.value[i-1]==="*" || tela.value[0]==="*") {
//             let tamanho = tela.value.length;
//             tela.value = tela.value.substring(0,tamanho-1);
//         }
//     }
// }

// function limpaTela() {
//     tela.value = "";
// }

// function avisoErro() {
//     if(tela.value==="NaN") {
//         alert("Isso é um bug")
//         limpaTela();
//     }
// }

// function apagaTela() {
//     if(tela.value.length >= 1) {
//         let tamanho = tela.value.length;
//         tela.value = tela.value.substring(0,tamanho-1);
//     }
// }

// function naoRepeteSinal() {
//     for(let i = 0; i < tela.value.length; i++) {
//         if(tela.value) {
//         } 
//     }
// }

// function ativaTela() {
//     botoes.forEach(botao => {
//         botao.addEventListener("click", () => {
//             if(botao.value===0) {
//                 if(botao.textContent==="x") {
//                     tela.value += "*"
//                 } else if(botao.textContent==="RESET") {
//                     limpaTela();
//                 } else if(botao.textContent==="÷") {
//                     tela.value += "/";
//                 } else if(botao.textContent==="-") {
//                     tela.value += "-"
//                 } else if(botao.textContent==="+") {
//                     tela.value += "+";
//                 } else if(botao.textContent==="+/-") {
//                     tela.value = tela.value*(-1);
//                 } else if(botao.textContent===".") {
//                     tela.value += ".";
//                 } else if(botao.textContent==="DEL") {
//                     apagaTela();
//                 } else if(botao.textContent==="0") {
//                     tela.value += 0;
//                 }
//             } else {
//                 tela.value += botao.value;
//             }
//             avisoErro();
//             naoRepeteSinal();
//         })
//     })
// }

// ativaTela();

