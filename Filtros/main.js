function Filtrar()
{
    document.getElementById("formulario").style.display = "none";
    document.getElementById("layout").style.display = "inline";
}

function Desfiltrar()
{
    document.getElementById("formulario").style.display = "block";
    document.getElementById("layout").style.display = "none";
}

function Selecionar()
{
    var Faixa = document.getElementById('Faixa').value;
    var Unidade = document.getElementById('Unidade').value;
    var Comunicacao = document.getElementById('Comunicacao').value;
    var Alimentacao = document.getElementById('Alimentacao').value;
    var Exatidao = document.getElementById('Exatidao').value;

if(Faixa == '1' &&
 Unidade == '1' &&
 Comunicacao == '1' &&
 Alimentacao ==  '1' &&
 Exatidao == '1' )
{
    document.getElementById('text').innerText = "DMY-2011/35/36: Duas entradas universais para RTD, TCs, 0-55 mV, 4-20 mA, 1-5 Vcc, 0-10 Vcc.<br/> DMY-2011/35/36-F: <br/>Duas entradas de sinal de frequência até 30 kHz. <br/>Dois displays de 4 dígitos.<br/>Até 2 módulos de saída analógica 4-20 mA, 1-5 Vcc e 0-10 Vcc.<br/>Até 4 módulos de alarme com relés SPST e SPDT.<br/>Comunicação RS-232 ou RS-422/485.";
    document.getElementById('img_Prod').src = 'imagens/DMY-2011 & DMY-2035 & DMY-2036.png';
}

if(Faixa == '2' &&
 Unidade == '1' &&
 Comunicacao == '1' &&
 Alimentacao ==  '1' &&
 Exatidao == '1' )
{
    document.getElementById('text').innerText = "Modelos com entradas para 12 TCs, 8 RTDs, 12 entradas de corrente 4-20 mA <br/> ou 12 de tensão 1-5 Vcc, e combinações de dois tipos de entradas. <br/> Display de 4 dígitos. <br/> Totalização de oito entradas de tensão ou corrente. <br/> Até 2 módulos de alarme com relés SPDT.<br/> Comunicação RS-232 ou RS-422/485. <br/> Ideal para uso com o Sistema Supervisório SOFTgraph ou com o Registrador Virtual VR-2000.";
    document.getElementById('img_Prod').src = 'imagens/DMY-2015.png';
}
}