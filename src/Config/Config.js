import { useEffect } from 'react'
import { useSelector } from 'react-redux';

export default function Config() {

    const theme = useSelector((state)=>state.theme)

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))
    console.log(theme);
  }, [theme]);

  return null
}
