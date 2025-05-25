export const smoothScrollTo = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  scrollId: string,
  block: 'start' | 'center' | 'end',
) => {
  e.preventDefault()
  const element = document.getElementById(scrollId)
  if (!element) return
  element.scrollIntoView({
    block: block,
    behavior: 'smooth',
  })
}
