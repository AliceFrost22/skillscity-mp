export default function Header() {
    return (
        <div className="w-full">
                <div className="grid justify-items-center r animate-bounce m-0">
                    <a href="/"><img src="/assets/wave.png" className="w-24"/></a>
                </div>
            <h1 className="text-5xl text-center mb-5 font-header"> ALICE FROST</h1>
            <h2 className="text-xl text-center mb-5 font-sans">Junior Software Engineer</h2>
                <div className="m-5">
                    <img src="/assets/alice-img.png"/>
                </div>
        </div>
    );
}