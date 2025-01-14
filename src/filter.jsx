import { useContext, useState } from 'react'
import typesJSON from './mockup/types.json'
import { useEffect } from 'react'
import { FilterContext } from './context/filterContext'


export default function Filter(){
    const {search, setSearch,typesSearch,setTypesSearch} = useContext(FilterContext)
    
    return(
        
        <div className="w-dvw block">
            <span className="flex justify-center flex-wrap mt-2">
        <label htmlFor="filter" className="text-gray-50" >Search by Name </label>
        <input id="filter" onKeyUp={ (e)=>{setSearch(e.target.value);} } className="mx-4 px-2 rounded-md bg-slate-900 text-gray-50 h-8" placeholder="Pokemon..." />
        </span>
        <span className="flex justify-center flex-wrap mt-4" >
            <Types />
        </span>
        </div>
    )
}
let selected = []
function Types(){

    const {typesSearch, setTypesSearch}= useContext(FilterContext)
    


    return(
        <>
    {
        
        typesJSON.map((item,key) => {
            
            const [isSelected, setIsSelected] = useState(false)
            const typeName = item.name
            
            
            function handleSelected(){
                if(selected.includes(typeName)){
                    setIsSelected(!isSelected)
                    selected.splice(selected.indexOf(typeName),1)
                    
                    
                    return null;
                }
                

            
                setIsSelected(!isSelected)
                
                
                
                selected.push(typeName)
                
              //console.log(typesSearch + " + " + selected)
            }
            
            
            return(
            <img onClick={()=>{
                handleSelected();
                setTypesSearch([selected]);
                console.log(selected)
            }} className={` ${isSelected ? "opacity-100":"opacity-40" } cursor-pointer m-0.5  h-6 object-contain hover:scale-110`} src={item.sprite.name_icon} alt={item.name} key={key} />
        )})
}</>

)

}