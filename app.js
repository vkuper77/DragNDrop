const items = document.querySelectorAll('.item')
const placeholders = document.querySelectorAll('.placeholder')

let item

items.forEach((it) => {
  it.addEventListener('dragstart', dragstart)
  it.addEventListener('dragend', dragend)
})

for (let placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover)
  // placeholder.addEventListener('dragenter', dragenter)
  // placeholder.addEventListener('dragleave', dragleave)
  placeholder.addEventListener('drop', dragdrop)
}

function dragstart(event) {
  event.target.classList.add('hold')
  placeholders.forEach((p) => {
    setTimeout(() => {
      p.classList.add('hovered')
      event.target.classList.add('hide')
    }, 0)
  })
}

function dragend(event) {
  event.target.className = 'item'
  item = event.target
}

function dragover(event) {
  event.preventDefault()
}

// function dragenter(event) {}
// function dragleave(event) {}

function dragdrop(event) {
  placeholders.forEach((p) => {
    p.classList.remove('hovered')
  })
  if (item) {
    event.target.append(item)
  }
}
