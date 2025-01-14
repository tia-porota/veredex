import { useState } from "react"

export default function Navbar({children}){
    const [hide, setHide] = useState(true)
    function handlePress(){
        setHide(!hide)
        console.log("holaa")

    }
    return(
        <>
        <div className="inline-flex p-4 w-full bg-slate-800 text-gray-50 justify-between">
        <p>Veredex - Gen 1 Pokedex + Cries</p>
        <p onClick={handlePress} className={` bg-slate-600 border-r-slate-600 border rounded-lg text-gray-50 px-2 pt cursor-pointer `}>Filter</p>
        </div>
        <div className={`${hide ? "hidden" : "flex"} `}>
            {children}
        </div>
        </>
    )
}