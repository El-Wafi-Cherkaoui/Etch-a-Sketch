let button_d = document.createElement('button')
button_d.textContent = "change dimensions"
button_d.id = 'change-dimensions-btn'

let button_c = document.createElement('button')
button_c.textContent = "rainbow color"
button_c.id = 'rainbow-btn'

let button_op = document.createElement('button')
button_op.textContent = "opacity color"
button_op.id = 'opacity-btn'


let button_eraser = document.createElement('button')
button_eraser.textContent = "eraser"
button_eraser.id = 'eraser-btn'


let buttons_cont = document.querySelector('.buttons-cont')
buttons_cont.appendChild(button_op)
buttons_cont.appendChild(button_c)
buttons_cont.appendChild(button_d)
buttons_cont.appendChild(button_eraser)




function create_grid(dimention=16){
    let container = document.createElement('div')
    container.id = 'container'
    for (let i=0; i<dimention; i++){

        let row = document.createElement('div')
        row.style = 'display:flex'

        for (let i=0; i<dimention; i++){
            let grid = document.createElement('div')
            grid.style.width = '15px'
            grid.style.height = '15px'
            // grid.style.border = '1px solid black'
            grid.style.opacity = '0.1'
            grid.id = 'grid'

            row.appendChild(grid)
        }
        container.appendChild(row)
    }

    document.body.appendChild(container)

    let grid_list = document.querySelectorAll('#grid')
    grid_list.forEach(grid => {
        grid.addEventListener('mouseover', (event)=>{
            let color = "rgb("
            if (eraser_option) color = "white"
            else if(rainbow_option) {
                for (let i=1; i<=3; i++){
                    color += Math.floor(Math.random()*250)
                    if (i!=3) color += ","
                    if (i==3) color += ")"
                }
            }
            
            else color = "black"

            event.target.style.backgroundColor = color
            if (opacity_option) {
                event.target.style.opacity = `${Number(event.target.style.opacity) + 0.1}`
            }
            else{
                event.target.style.opacity = "1"
            }
        })
    });
}

create_grid()

var rainbow_option = false
var opacity_option = false
var eraser_option = false

button_d.addEventListener('click',()=>{
    let dimension
    do{
        dimention = Number(prompt('enter the number of cells in each row you want'))        
    }while(dimention>100)
    let cont = document.querySelector('#container')
    cont.remove()
    create_grid(dimention)
})
button_c.addEventListener('click',(event)=>{
    if (rainbow_option) {
        not_active(event.target)
        rainbow_option = false
    }
    else {
        active(event.target)
        rainbow_option = true
    }
})
button_op.addEventListener('click', (event)=>{
    if (opacity_option) {
        not_active(event.target)
        opacity_option = false
    }
    else {
        active(event.target)
        opacity_option = true
    }
})
button_eraser.addEventListener('click', (event)=>{
    if (eraser_option) {
        not_active(event.target)
        eraser_option = false
    }
    else {
        active(event.target)
        eraser_option = true
    }
})

function active(button){
    button.style.backgroundColor = "white"
    button.style.color = "black"
    button.style.border = "1px solid black"
}
function not_active(button){
    button.style.backgroundColor = "black"
    button.style.color = "white"
    button.style.border = "1px solid black"
}