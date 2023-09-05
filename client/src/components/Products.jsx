import Cardsdata from '../datasets/CardData'

const Products = () => {
  return (
    <>
        <div className="pdts">
            {
                (Cardsdata.length>0) ? Cardsdata.map((itm, indx) => {
                    return (
                        <div key={indx} className="pdt">
                            <img src={itm.imgdata} alt="" />
                            <h3>{itm.dish}</h3>
                            <p>{itm.address}</p>
                        </div>
                    )
                }) : null
            }
        </div>
    </>
  )
}

export default Products