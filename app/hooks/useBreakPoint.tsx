import { configResponsive, useResponsive } from 'ahooks';

configResponsive({
  sm: 768,
  md: 1024,
  lg: 1280,
})


export default function useBreakPoint () {
    const responsive = useResponsive()

    return responsive
}