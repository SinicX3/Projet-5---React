import PropTypes from "prop-types"

function Tags ({tags}) {

 const tagList = tags.map((e, index) => <p key={`${e}-${index}`}>{e}</p>)

 return(<div className="tags">{tagList}</div>)
}

Tags.propTypes = {
  tags: PropTypes.array
}

export default Tags