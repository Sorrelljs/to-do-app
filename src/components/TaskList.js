import vectorImage from '../images/Vector.png'
const TaskList = (props) => {
    return ( 
        <div className="taskList_container__list">
            <div className={`taskList_vector__container ${props.color}`}>
                <div className="taskList_vector__holder">
             <img className="taskList_container__logo" src={vectorImage} alt="" />
                </div>
            </div>
            <p className="taskList_container__title">{props.title}</p>
            <p className="taskList_container__counter">{props.counter} tasks</p>
        </div>
     );
}
 
export default TaskList;