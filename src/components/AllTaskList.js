import Card from "./Card";
import FooterBackground from "./FooterBackground";
import { useState } from "react"
// exporting default value you will not use a object 
import useFetch from "../hooks/useFetch"

const AllTaskList = () => {
    const [url, setUrl] = useState('http://localhost:3000/blogs')
    const { data, isPending, error } = useFetch(url)

    return ( 
        <div className="all_tasklist__container">
            <h2>All Tasks</h2>
            {isPending && <div>Loading Tasks...</div>}
            {error && <div>{error}</div>}
            <ul>
            {data && data.map(blog => (
                <li key={blog.id}>
                <Card title={blog.title} paragraph={blog.paragraph} date={blog.date} id={blog.id} />
                </li>
             ))}
                </ul>

     {/* <FooterBackground
        height={619}
        top={193}
        /> */}
        </div>
     );
}
 
export default AllTaskList;