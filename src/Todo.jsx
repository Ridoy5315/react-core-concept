// export default function Todo({task, isDone}) {
//      if(isDone){
//           return <li>Well Done Your Task: {task} is finish </li>
//      }
//      return <li>Please finish your Task: {task} first </li>
// }

//ternary
// export default function Todo({task, isDone}) {
     
//      return <li>{isDone? 'Finished the ':'Please do it '} task:{task}</li>
// }
export default function Todo({task, isDone}) {
     
     return <li>task: {task} {isDone || 'PLease do it quickly'}</li>
}