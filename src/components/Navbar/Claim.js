import Button from "react-bootstrap/Button";
export const Claim = () => {
    const isTwitted =this.props.isTwitted
    const isLiked = this.props.isLiked
    const isChecked = this.props.isChecked
    
  return (
    <div>
        {!isTwitted && !isLiked && !isChecked && 
            (<Button disabled={false} variant="warning" size="lg">Claim Now</Button>
            )}
    </div>
  );
  }

export default Claim;