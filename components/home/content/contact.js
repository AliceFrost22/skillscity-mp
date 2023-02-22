import Content from "@/components/shared/content";
import { useState } from "react";
import Input from "@/components/home/input";
import NavigationBar from "@/components/home/navigation-bar";
import MainNav from "@/components/home/navigation-bar/nav-bar-home";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChangeMessage = (event) => {
        const message = event.target.value;
        setMessage(message);
    }
    // FETCH REQUEST
    // const handleSubmit = async (event) => {
    //     const response = await fetch(`/api/contact?name=${name}&email=${email}&message=${message}`);
    //     const data = await response.json();

    const handleSubmit = async (event) => {

    let payload = {
        name:name,
        email:email,
        message:message
    };

    const response =await fetch(`/api/contact`,{
        method: "POST",                                                                                         
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(payload)
    })

        setName("");
        setEmail("");    
        setMessage("");
        setShowSuccess(true);
    }

    return (
        <div className="w-full ">
               <Content>
                <h className="font-bold p-2">If you wish to get in touch please leave your details and a message below</h>
                <form className="flex flex-col space-y-3 p-2">
                    <Input
                        placeholder="Name"
                        value={name}
                        onChange={(value) => setName(value)}
                        disabled={false}  //you can disable a field and it wont be clickable if {true}
                    />
                    <Input
                        placeholder="Email"
                        value={email}
                        onChange={(value) => setEmail(value)}
                    />
                    <textarea
                        placeholder="Message"
                        className="bg-gray-200 py-3 px-6 w-96 rounded"
                        value={message}
                        onChange={handleChangeMessage}
                    />

                    <button
                        className="bg-blue-500 py-3 px-6 w-96 rounded text-white"
                        onClick={handleSubmit}
                        type="button"
                    >
                        Submit
                    </button>

                    {showSuccess === true ? 
                        (<p className="text-green-500 w-96">
                            Your message was sent!
                        </p>)
                        :
                        null
                    }
                </form>
            </Content>
        
        </div>
    )
}