const panels = document.querySelectorAll('.panel')

// Loop through an Array - forEach takes in a function. These array take in function as a argument.
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removes()
        panel.classList.add('active');
    } )
})

function removes () {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}