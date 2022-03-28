import './app-info.css';

const AppInfo = ({staffs, increased}) =>{
    return(
         <div className="app-info">
             <h1>Учет сотрудников в компании Wayne Enterprises</h1>
             <h2>Общее число сотрудников: {staffs}</h2>
             <h2>Премию получат: {increased}</h2>
         </div>
    )
}

export default AppInfo;