import { useState } from "react";
import FooterBackground from "./FooterBackground";

const Create = (props) => {

    const [title, setTitle] = useState("")
    const [body, setBody] =useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return ( 
        <div className="create-page__container">
            <p className="title_h4__dashboard">{props.title}</p>
                
                            <FooterBackground
                            height={619}
                            top={193}/>
        <div className="create-form__wrap">
            <form className="create-page__form" onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                {/* Below we set the value as the title state 
                 / and we also use the event inside the annonymous function to use the setState to update 
                / what the users input is*/}
                <input 
                type="text"
                required
                onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                 {/* Below we set the value as the body state 
                 / and we also use the event inside the annonymous function to use the setState to update 
                / what the users input is*/}
                <textarea
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}>

                </textarea>
                 {/* Below we set the value as the author state 
                 / and we also use the event inside the annonymous function to use the setState to update 
                / what the users input is*/}
         
           
                <p>{title}</p>
                <p>{body}</p>
            </form>
        </div>
        </div>
     );

}
 
export default Create;