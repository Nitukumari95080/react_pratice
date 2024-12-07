
import Box from './Box'
import './Box.css';
import ByDefaultProps from './ByDefultProps';
const BoxPage = () => {
  return (
    <div className="box-container">
      <Box name="Dheeraj" />
      <Box name="Dheeraj"  />
      <Box/>
      <Box/>
      <Box/>
      <ByDefaultProps/>
    </div>
  )
}

export default BoxPage
