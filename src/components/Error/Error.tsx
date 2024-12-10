import { IError } from '../../interfaces/interfaces'
import './Error.style.scss'

function Error({ error }: IError) {
  return (
    <div className="error">
      <h5>{error}</h5>
    </div>
  )
}

export default Error
