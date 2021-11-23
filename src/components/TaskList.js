import vectorCheck from '../images/Vector.png'
const TaskList = (props) => {
    return ( 
        <div className="taskList_container__list">
            <img className="taskList_container__logo" src={vectorCheck} alt="" />
            <p className="taskList_container__title">{props.title}</p>
            <p className="taskList_container__counter">{props.counter}</p>
        </div>
     );
}
 
export default TaskList;