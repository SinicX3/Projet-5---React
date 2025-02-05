function Tags ({tags}) {

 const tagList = tags.map(e => <p>{e}</p>)

 return(<div className="tags">{tagList}</div>)
}

export default Tags