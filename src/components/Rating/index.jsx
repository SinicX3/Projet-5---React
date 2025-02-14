import star from '../../assets/star-solid.svg'
import nostar from '../../assets/star-regular.svg'

function Rating (rating) {

 const ratingList = []
 for (let i = 0; i < rating.rating; i++) {
  ratingList.push(<img key={i} src={star}/>)
 }

 const badRating = 5 % rating.rating
 for (let j = 0; j < badRating; j++) {
  ratingList.push(<img key={j + rating.rating} src={nostar}/>)
 }

 return(<div className='rating'>
  {ratingList}
 </div>)
}

export default Rating