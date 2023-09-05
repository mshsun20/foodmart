import { useState } from 'react'
import Cardsdata from '../datasets/CardData'

const Products = () => {
    const [itmCnt, setItmCnt] = useState(0)

  return (
    <>
        <div className="pdts">
            <div className="adcrt">{itmCnt} Items</div>
            <div className="pdtcrd">
                {
                    (Cardsdata.length>0) ? Cardsdata.map((itm, indx) => {
                        return (
                            <div key={indx} className="pdt">
                                <img src={itm.imgdata} alt="" />
                                <h3>{itm.dish}</h3>
                                <p>{itm.address}</p>
                                <p>{itm.price}</p>
                                <button onClick={() => setItmCnt(itmCnt+1)}>Add to Cart</button>
                            </div>
                        )
                    }) : null
                }
            </div>
        </div>
    </>
  )
}

export default Products