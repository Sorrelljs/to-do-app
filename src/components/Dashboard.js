import TaskList from "./TaskList";

const Dashboard = (props) => {
    return ( 
        <div className="title-container__dashboard">
            <h4 className="title_h4__dashboard">{props.title}</h4>
        <TaskList title="To do" counter="5"/>
        </div>
     );
}
 
export default Dashboard;