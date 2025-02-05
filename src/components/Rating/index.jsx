import star from '../../assets/star-solid.svg'

function Rating (rating) {

 const ratingList = []
 for (let i = 0; i < rating.rating; i++) {
   ratingList.push(<img src={star}/>)
 }

 console.log(ratingList)

 return(<div className='rating'>
  {ratingList}
 </div>)
}

export default Rating