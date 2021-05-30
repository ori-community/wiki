export default function scrollBehavior (to) {
  if (to.hash) {
    return document.querySelector(to.hash).scrollIntoView({
      behavior: 'smooth'
    })
  }
  return window.scrollTo({top: 0, behavior: 'smooth'})
}
