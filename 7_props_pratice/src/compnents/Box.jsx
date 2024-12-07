
// props alwyes time print object
//jab ham props dete h to hame usse pahle jaha pe ham apni compnets ko render kara rahe h waha pe ham ek varible dete or us variable ke name se hame access karte h ex-props.variableName, and syntax <Box name=`Dheeraj` />

const Box = (props) => {
  return (
    <div className='box'>
      <h2>{props.name}</h2>
      <p>hell</p>
    </div>
  )
}

export default Box
