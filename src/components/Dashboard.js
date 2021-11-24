import Card from "./Card";
import FooterBackground from "./FooterBackground";
import TaskList from "./TaskList";

const Dashboard = (props) => {
    return ( 
        <div className="title-container__dashboard">
            <h4 className="title_h4__dashboard">{props.title}</h4>
        {/* Insert Code to say, If these task */}
        <TaskList title="   To do   " counter="5" color="red"/>
        <TaskList title="In Progress" counter="4" color="yellow"/>
        <TaskList title="Completed" counter="12" color="blue"/>
        <FooterBackground 
        height={307} 
        top={505} 
        header="Upcoming tasks" 
        button="View More"
        />
        <Card 
        title="Task Name"
        paragraph="lorem ipsiumfsdn jffn sjsk kg"
        date="August 22, 2021"/>

        </div>
     );
}
 
export default Dashboard;