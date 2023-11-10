import logo from './assets/logo.png'
export default function Banner(){
    return(
        <header>
            <img src={logo} alt='logo-image' width={60} height={60}/>
            <h1>La maison jungle</h1>
        </header>
    )
}