export default function Header() {
    return (
        <div className="w-full ">
                <div className="grid justify-items-center animate-bounce m-0">
                    <a href="/"><img src="/assets/wave.png" className="w-12 lg:w-24 md:w-24"/></a>
                </div>
                    <h1 className="text-5xl text-center mb-5 font-header"> ALICE FROST</h1>
                    <h2 className="text-xl text-center mb-5 font-sans">Junior Software Engineer</h2>
                <div className="m-5">
                    <a><img src="/assets/alice-img.png" className="mx-auto w-full md:w-1/3 lg:w-1/2 rounded"/></a>
                </div>
        </div>
    );
}