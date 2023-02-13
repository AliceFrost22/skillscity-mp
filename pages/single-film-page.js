import NavigationBar from "@/components/home/navigation-bar";
import Topics from "@/components/home/topics";
import Content from "../components/shared/content";
import CopyToClipboard from "react-copy-to-clipboard";


export default function FilmPage(film, linkToPurchase){
    return (
        <div className="bg-black">
            <NavigationBar></NavigationBar>
            <Content>
                <Topics></Topics>
                <CopyToClipboard text={film.linkToPurchase}>
                <button
                className="bg-red-900 px-4 rounded-lg"
                type="button" >
                Copy Link to Amazon
                </button>
                </CopyToClipboard>
            </Content>
        </div>
    )
}