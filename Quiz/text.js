const questions = [ {
    
    'que':'which of the following is markup language ',
'a ': 'html',
'b' : 'css',
'c':'js',
'd':'php'}

// {'que':'which of the following is design language '
// 'a' : 'html'
// 'b' : 'css'
// 'c':'js'
// 'd':'php'}"
]

let index = 0;
document.getElementById("quesbox");
const optioninput = document.querySelectorAll('.options');

const loadquestions = () =>
{
    const data = questions [index];
    // console.log(data)
    quesbox.innertext = `${index.h} ${data.que}`
    optioninput[0].nextElementSibling.innertext = data.a
    optioninput[1].nextElementSibling.innertext = data.b
    optioninput[2].nextElementSibling.innertext = data.c
    optioninput[3].nextElementSibling.innertext = data.d
}
