import { useEffect, useState } from "react";

const PaymentMethod = ({register, errors, setPaymentMethod}) => {
    const [cachePayment, setCachePayment] = useState(false)
    const [cardPayment, setCardPayment] = useState(false)

    useEffect(() => {
      if (cachePayment) {
        setCardPayment(false);
        setPaymentMethod("on delivery")
      }
      if (cardPayment) {
        setCachePayment(false);
        setPaymentMethod("with card")
      }
    }, [cachePayment, cardPayment]);

    const isSelected = () => {
        console.log(cachePayment || cardPayment)
        return (cachePayment || cardPayment)
    }

    return (
        <div style={{paddingLeft: '10px', lineHeight: '0'}}>
        <div className="grid-container" style={{display: 'grid', marginBottom: '7px'}} {...register('payment', { validate: isSelected })}>
            <div className="grid-item" style={{gridColumn: "1/2",}}>
                <p style={{fontFamily: 'cursive', fontSize: '20px'}}>Payment method: </p>
            </div>
            <div className="grid-item" style={{gridColumn: "2/3"}}>
                <input type="checkbox" value={cachePayment} checked={cachePayment} onChange={() => setCachePayment(!cachePayment)}></input>          
                <label style={{fontFamily: 'cursive', fontSize: '15px'}} htmlFor="cars">On delivery</label>
            </div>
            <div className="grid-item" style={{gridColumn: "2/3", gridRow: "2"}}>
                <input type="checkbox" value={cardPayment} checked={cardPayment} onChange={() => setCardPayment(!cardPayment)}></input>
                <label style={{fontFamily: 'cursive', fontSize: '15px'}} htmlFor="cars">Card</label>
            </div>
        </div>
        {errors.payment && errors.payment.type === "validate" && <span style={{fontSize: '17px', fontFamily: 'cursive'}} className="p3">Choose payment option. </span>}
        </div>
    )
}; export default PaymentMethod;