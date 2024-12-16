import { NavigateFunction, useNavigate, } from 'react-router'

const redirectWithScrollToTop = (navigate: NavigateFunction, to: string, from?: string, newTab?: boolean) => {
  if (newTab) {
    window.open(to, '_blank')
  } else {
    const page = document.querySelector('.main-scroll-bar')?.firstChild as HTMLElement
    navigate(to, { state: { from, }, })

    if (page !== null && page !== undefined) {
      page.scrollTo(0, 0)
    }
  }
}

const useRedirect = () => {
  const navigate = useNavigate()

  const redirect = (to: string, from?: string, newTab?: boolean) => {
    redirectWithScrollToTop(navigate, to, from, newTab)
  }

  return redirect
}

export default useRedirect