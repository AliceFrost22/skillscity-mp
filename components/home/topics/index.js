import topics from "./topics";

export default function Topics() {
    return(
        <div className="w-full">
            <div className="m-4 py-3 px-2 bg-gray-200 rounded text-center font-header text-lg">
                 <h2>KEY TECHNICAL SKILLS</h2>
            <div>
                <div className="flex flex-row-3 w-24">
                        <ul className="list-disc">
                        {topics.map((topic, index)=>{ 
                        return <li key={index}>{topic}</li>
                        })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}