import './Error.style.scss'

function Error({ error }: { error: string }) {
  return (
    <div className="error">
      <h5>{error}</h5>
    </div>
  )
}

export default Error
