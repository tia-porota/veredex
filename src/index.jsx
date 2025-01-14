import App from "./App";
import { FilterProvider } from "./context/filterContext";

export default function Index(){
    return(
        <FilterProvider>
        <App />
        </FilterProvider>
    )
}