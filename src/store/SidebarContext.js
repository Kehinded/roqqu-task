import {useState, createContext} from "react"

const SidebarContext = createContext({
    showSideBar: false,
    showsidebarFunc: (param) => {},
})

export function SidebarContextProvider (props){
    const [issidebaropen, setissidebaropen] = useState(false)

    function sidebarfunc (param){
      if(param === "close"){
          setissidebaropen(false)
      }
      else{   
           setissidebaropen(!issidebaropen);
      }
    }

    const context = {
      showSideBar: issidebaropen,
      showsidebarFunc: sidebarfunc,
    };

    return <SidebarContext.Provider value={context}>
        {props.children}
    </SidebarContext.Provider>
}

export default SidebarContext;