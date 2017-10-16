var status = "less";

function josTeksta1()
{
    var text=" Računaljka je bila u obliku ploče. Rimski abak je bio ploča podeljena na pruge ili pravougaona polja, po kojima su se pomerali kamenčići ili žetoni.";
    
    if (status == "less") {
        document.getElementById("dodatniTekst1").innerHTML=text;
        document.getElementById("dugmeJosTeksta1").innerText = "Prikaži manje";
        status = "more";
    } else if (status == "more") {
        document.getElementById("dodatniTekst1").innerHTML = "";
        document.getElementById("dugmeJosTeksta1").innerText = "Prikaži više";
        status = "less"
    }
}

function josTekstaA()
{
    var text="Mehanizam mašine zasnivao se na zupčanicima sličnim današnjim brojačima na automobilu. Međutim, problemi u konstrukciji bili su mnogo veći jer se tadašnja francuska novčanica livra delila na 20 sola, a jedan sol je imao 12 denija. Do 1652. proizvedeno je pedeset mašina, ali su se one slabo prodavale, jer su korisnici upotrebu smatrali komplikovanom, pa je proizvodnja obustavljena.";
    
    if (status == "less") {
        document.getElementById("dodatniTekstA").innerHTML=text;
        document.getElementById("dugmeJosTekstaA").innerText = "Prikaži manje";
        status = "more";
    } else if (status == "more") {
        document.getElementById("dodatniTekstA").innerHTML = "";
        document.getElementById("dugmeJosTekstaA").innerText = "Prikaži više";
        status = "less"
    }
}

function josTeksta3()
{
    var text="Konrad Cuze (Conrad Zuse) je 1934. godine u Nemačkoj započeo rad na konstrukciji računskih mašina. Razvio je jednu za drugom četiri računske mašine Z1 (mehaničku), Z2 (elekgromehaničku), elekgromehaničku programabilnu Z3 (1941.) i njenu poboljšanu verziju Z4, koja je korišćena u razvoju nemačkih letećih bombi.";
    
    if (status == "less") {
        document.getElementById("dodatniTekst3").innerHTML=text;
        document.getElementById("dugmeJosTeksta3").innerText = "Prikaži manje";
        status = "more";
    } else if (status == "more") {
        document.getElementById("dodatniTekst3").innerHTML = "";
        document.getElementById("dugmeJosTeksta3").innerText = "Prikaži više";
        status = "less"
    }
}


function josTeksta4()
{
    var text="Ovi elementi su bili veliki, trošili su mnogo struje i oslobađali veliku količinu toplote. Za skladištenje programa i podataka koristile su se različite memorije (magnetne trake i doboši). Za pisanje programa koristio se mašinski jezik.";
    
    if (status == "less") {
        document.getElementById("dodatniTekst4").innerHTML=text;
        document.getElementById("dugmeJosTeksta4").innerText = "Prikaži manja";
        status = "more";
    } else if (status == "more") {
        document.getElementById("dodatniTekst4").innerHTML = "";
        document.getElementById("dugmeJosTeksta4").innerText = "Prikaži više";
        status = "less"
    }
}

function josTeksta5()
{
    var text="ENIAC je bio prvi uspešan elektronski računar opšte namene. NJegov program nije bio uskladišten u centralnoj memoriji, ali je mogao da izvodi operacije elektronskom brzinom (1000 puta brže nego Mark I). Mašina je programirana da izvršava operacije uključivanjem i isključivanjem kablova i prekidača, a po potrebi i prelemljivanjem žica, što je trajalo i nekoliko dana kada je računar reprogramiran za rešavanje novog problema. Bušene kartice su korišćene za ulaz i izlaz podataka.";
    
    if (status == "less") {
        document.getElementById("dodatniTekst5").innerHTML=text;
        document.getElementById("dugmeJosTeksta5").innerText = "Prikaži manje";
        status = "more";
    } else if (status == "more") {
        document.getElementById("dodatniTekst5").innerHTML = "";
        document.getElementById("dugmeJosTeksta5").innerText = "Prikaži više";
        status = "less"
    }
}


function josTeksta6()
{
    var text="Tranzistori su imali nekoliko prednosti nad elektronskim cevima, bili su jeftiniji, brži, manji, trošili manje električne energije i razvijali manje toplote.";
    
    if (status == "less") {
        document.getElementById("dodatniTekst6").innerHTML=text;
        document.getElementById("dugmeJosTeksta6").innerText = "Prikaži manje";
        status = "more";
    } else if (status == "more") {
        document.getElementById("dodatniTekst6").innerHTML = "";
        document.getElementById("dugmeJosTeksta6").innerText = "Prikaži više";
        status = "less"
    }
}

function josTeksta7()
{
    var text="Tranzistori su bili minijaturizovani i stavljeni u silikonski čip (tranzistori su bili napravljeni na istom parčetu silicijuma; zatim bi to parče silicijuma bilo stavljano u jedno kućište i takav sklop je dobio ime integrisano kolo), što je veoma povećalo brzinu i efikasnost računara.";
    
    if (status == "less") {
        document.getElementById("dodatniTekst7").innerHTML=text;
        document.getElementById("dugmeJosTeksta7").innerText = "Prikaži manje";
        status = "more";
    } else if (status == "more") {
        document.getElementById("dodatniTekst7").innerHTML = "";
        document.getElementById("dugmeJosTeksta7").innerText = "Prikaži više";
        status = "less"
    }
}


function josTeksta8()
{
    var text="Poboljšane hardverskih karakteristika dovodi do smanjenja dimenzija računara, povećanja kapaciteta glavne i periferijske memorije, znatno brže obrade podataka.";
    
    if (status == "less") {
        document.getElementById("dodatniTekst8").innerHTML=text;
        document.getElementById("dugmeJosTeksta8").innerText = "Prikaži manje";
        status = "more";
    } else if (status == "more") {
        document.getElementById("dodatniTekst8").innerHTML = "";
        document.getElementById("dugmeJosTeksta8").innerText = "Prikaži više";
        status = "less"
    }
}

function josTeksta9()
{
    var text="U ovom slučaju, peta generacija računara  zasnovana je na  veštačkoj inteligenciji i drugim naprednim tehnologijama, koje su još uvek u razvoju, mada već postoje programi i informatičke tehnologije koje se primenjuju. Navešćemo samo neke od njih: prepoznavanje glasa i lica (ličnosti), paralelno procesiranje (paralelna obrada podataka, na više procesorskim mašinama), superprovodnici, veštačka inteligencija (od nedavno najbolji šahisti na svetu su računari), nanotehnologije (novi materijali poput grafina učiniće monitore još jeftinijim).";
    
    if (status == "less") {
        document.getElementById("dodatniTekst9").innerHTML=text;
        document.getElementById("dugmeJosTeksta9").innerText = "Prikaži manje";
        status = "more";
    } else if (status == "more") {
        document.getElementById("dodatniTekst9").innerHTML = "";
        document.getElementById("dugmeJosTeksta9").innerText = "Prikaži više";
        status = "less"
    }
}


function josTeksta10()
{
    var text="Super računari se koriste za rešavanje problema koji zahtevaju izračunavanja visokih performansi. Na samom vrhu se nalaze problemi koji pripadaju klasi velikih izazova. Ovoj klasi pripadaju problemi koji se ne mogu rešiti u realnom vremenu korišćenjem danas raspoloživih računara. Namenjeni su za naučnotehničke proračune s ogromnim brojem računskih operacija. Takvi proračuni obično su potrebni u: meteorologiji, seizmologiji, hidrologiji i za vojne potrebe.";
    
    if (status == "less") {
        document.getElementById("dodatniTekst10").innerHTML=text;
        document.getElementById("dugmeJosTeksta10").innerText = "Prikaži manje";
        status = "more";
    } else if (status == "more") {
        document.getElementById("dodatniTekst10").innerHTML = "";
        document.getElementById("dugmeJosTeksta10").innerText = "Prikaži više";
        status = "less"
    }
}


