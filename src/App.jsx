import { Card } from "./Card";
import Filter from "./filter";
import "./index.css";
import Navbar from "./Navbar";
import { FilterContext, FilterProvider } from "./context/filterContext";
import { useContext } from "react";
import cardsJSON from './mockup/cards.json'
export default function App() {
  
  const {search,typesSearch} = useContext(FilterContext)
  //console.log(search + " + "+ typesSearch[0])
  return (
    <div className="min-h-dvh ">
      <div>
      <Navbar>
      <Filter />
      </Navbar>
      
      <div className="m-2">
      </div>
      <div className="py-4 px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        { //
          cardsJSON.filter((item)=>{
            const typeArray = (item.types).length>1 ? [item.types[0].type.name,item.types[1].type.name] : [item.types[0].type.name,item.types[0].type.name]
          //  console.log("!! "+ typeArray + " !!! "+ typesSearch)
          console.log(typesSearch[0])
            if((!typesSearch || typesSearch[0][0]=="nonetype" || typesSearch[0][0]==undefined) && (item.name.includes(search) || search=="")){
              return true
            }
            
              for (let i = 0; i < typesSearch[0].length; i++) {
                if(typeArray.includes(typesSearch[0][i]) && item.name.includes(search)){
                  return true
              
            }
          }
            
           

          }).map((item, key) => (
          <Card key={item.id} ind={item.id} />
        ))
        }
      </div>
      </div>
    </div>
  );
}
