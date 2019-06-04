import paper from "paper"

let clientX = -100
let clientY = -100
let isStuck = false
let lastX = 0
let lastY = 0
let group

export function initCanvas() {
  document.addEventListener("mousemove", e => {
    clientX = e.clientX
    clientY = e.clientY
  })

  const canvas = document.querySelector(".canvas")

  const shapeBounds = {
    width: 75,
    height: 75,
  }

  paper.setup(canvas)
  const strokeColor = "rgb(156, 156, 156)"
  const strokeWidth = 1
  const segments = 8
  const radius = 25

  // the base shape for the noisy circle
  const polygon = new paper.Path.RegularPolygon(
    new paper.Point(0, 0),
    segments,
    radius
  )
  polygon.strokeColor = strokeColor
  polygon.strokeWidth = strokeWidth
  polygon.smooth()
  group = new paper.Group([polygon])
  group.applyMatrix = false

  // function for linear interpolation of values
  const lerp = (a, b, n) => {
    return (1 - n) * a + n * b
  }

  // the draw loop of Paper.js
  // (60fps with requestAnimationFrame under the hood)
  paper.view.onFrame = event => {
    // using linear interpolation, the circle will move 0.15 (15%)
    // of the distance between its current position and the mouse
    // coordinates per Frame

    lastX = lerp(lastX, clientX, 0.2)
    lastY = lerp(lastY, clientY, 0.2)
    group.position = new paper.Point(lastX, lastY)

    // if (!isStuck) {
    //   // move circle around normally
    //   lastX = lerp(lastX, clientX, 0.2)
    //   lastY = lerp(lastY, clientY, 0.2)
    //   group.position = new paper.Point(lastX, lastY)
    // } else if (isStuck) {
    //   // fixed position on a nav item
    //   lastX = lerp(lastX, stuckX, 0.2)
    //   lastY = lerp(lastY, stuckY, 0.2)
    //   group.position = new paper.Point(lastX, lastY)
    // }

    // if (isStuck && polygon.bounds.width < shapeBounds.width) {
    if (isStuck && polygon.bounds.width < shapeBounds.width) {
      // scale up the shape
      polygon.scale(1.1)
    } else if (!isStuck && polygon.bounds.width > 50) {
      // scale down the shape
      polygon.scale(0.9)
    }
  }
}

export const initHovers = () => {
  // find the center of the link element and set stuckX and stuckY
  // these are needed to set the position of the noisy circle
  const handleMouseEnter = e => {
    // const link = e.currentTarget
    // const linkBox = link.getBoundingClientRect()
    // stuckX = Math.round(linkBox.left + linkBox.width / 2)
    // stuckY = Math.round(linkBox.top + linkBox.height / 2)
    isStuck = true
  }

  // reset isStuck on mouseLeave
  const handleMouseLeave = () => {
    isStuck = false
  }

  const links = document.querySelectorAll("[data-cursor]")
  links.forEach(link => {
    link.addEventListener("mouseenter", handleMouseEnter)
    link.addEventListener("mouseleave", handleMouseLeave)
  })
}
