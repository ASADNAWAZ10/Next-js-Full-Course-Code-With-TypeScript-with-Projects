
export default function layoutFun({children, info}){
    return(
     <div className="flex">
        {children} {info}
     </div>
    )
}