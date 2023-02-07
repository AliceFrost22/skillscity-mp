export default function NavigationItem(props){
    return(
      <div className = "rounded-lg px-3 py-1 text-center">
        <a href={props.ahref}>{props.name}</a>
      </div>
    )
  }