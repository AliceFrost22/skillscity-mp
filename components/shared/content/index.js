//to get consistent styles

export default function Content ({children}) {
    return(
        <div className="w-full mx-auto">
            <div class="bg-repeat-x" img src="https://images.pexels.com/photos/413195/pexels-photo-413195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
            {children} 
            </div>
        </div>
    )
}