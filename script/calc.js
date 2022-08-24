const botoesNumeros = document.querySelectorAll(".botao__numeros"); 
const botoesOperacoes = document.querySelectorAll(".botao__operacao");
const tela = document.querySelector("input");
const caracteres = ["/","*","+","-","."];
const operacoes = ["/","*","+","-"]
let resultado = false;
let iniciaZero = false;

function ativaTecladoNumerico() {
    botoesNumeros.forEach(botao => {
        botao.addEventListener("click", () => {
            if(resultado && caracteres.includes(tela.value[(tela.value.length)-1]) == false) {
                limpaTela();
                resultado = false;
                tela.value += botao.value;
                if(tela.value==="0" && botao.textContent==="0") {
                    tela.value = "0";
                    iniciaZero = true;
                }
            } else {
                resultado = false;
                if(tela.value==="0" && botao.textContent==="0") {
                    tela.value = "0";
                } else if(tela.value==="0" && botao.textContent != "0") {
                    tela.value = botao.textContent;
                } else if(operacoes.includes(tela.value[tela.value.length-2]) && tela.value[tela.value.length-1] === "0" && botao.textContent != "."){
                    let tamanho = tela.value.length;
                    tela.value = tela.value.substring(0,tamanho-1);
                    tela.value += botao.value;
                } else { 
                    tela.value += botao.value;
                }
            }
        })
    })
}

function ativaTecladoCaracteres() {
    botoesOperacoes.forEach(carc => {
        carc.addEventListener("click", () => {
            if(carc.textContent==="RESET") {
                limpaTela();
            } else if(carc.textContent==="±") {
                if(tela.value==="") {
                    limpaTela();
                } else {
                    const valorAntesOperacao = tela.value;
                    tela.value = tela.value*(-1);
                    if(tela.value==="NaN") {
                        tela.value = valorAntesOperacao;
                        alert("Atenção! Operação Inválida!");
                    }
                }
            } else if(carc.textContent==="÷") {
                if(tela.value==="") {
                    limpaTela();
                } else {
                    tela.value += "/";
                    naoRepeteCaracter();
                }
            } else if(carc.textContent==="x") {
                if(tela.value==="") {
                    limpaTela();
                } else {
                    tela.value += "*";
                    naoRepeteCaracter();
                }
            } else if(carc.textContent==="DEL") {
                apagaTela();
            } else if(carc.textContent===".") {
                if(tela.value[tela.value.length-1] === ".") {
                    tela.value = tela.value;
                } else {
                    tela.value += ".";
                    naoRepeteCaracter();
                }
            } else if(carc.textContent==="=") {
                if(caracteres.includes(tela.value[(tela.value.length)-1])) {
                    const valorAntesOperacao = tela.value;
                    tela.value = valorAntesOperacao;
                    alert("Atenção! Operação Inválida!");
                } else {
                    realizaOperacao();
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
    let tamanho = tela.value.length;
    let novoCaracter = tela.value[tamanho-1]
    if(caracteres.includes(tela.value[tamanho-2])) {
        tela.value = tela.value.substring(0,tamanho-2);
        tela.value += novoCaracter;
    }
}

function realizaOperacao() {
    if(tela.value==="") {
        tela.value = tela.value;
    } else {
        for(let i = 0; i < tela.value.length; i++) {
            if(operacoes.includes(tela.value[i])) {
                const calculo = eval(tela.value);
                tela.value = calculo;
                resultado = true;
            } else {
                tela.value = tela.value;
            }
        }
    }
}

function ativaCalculadora() {
    ativaTecladoNumerico();
    ativaTecladoCaracteres();
}

ativaCalculadora();

