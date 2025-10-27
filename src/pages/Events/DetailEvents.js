import RegisterEvent from '../../components/Events/ResgiterEvents'
export default function DetaileEvents ({item}) {
    const attributeItem = Object.entries(item)
    return (
        <div>
            //Name and return page
                <div>
                    <button>

                    </button>
                    <p>

                    </p>
                </div>
            //img
            <div>
                <img />
                <div>
                {
                    attributeItem.map((at)=>{
                        return (
                            <p>
                                {at}
                            </p>
                        )
                    })
                }
                </div>
            <div>
                <p></p>
                <p></p>
                <p></p>
            </div>
            </div>
            {
                attributeItem.map((at)=>{
                    return(
                        <div>
                            <p>

                            </p>
                            <p>

                            </p>
                            <hr />
                        </div>
                    )
                })
            }
        <div>
            <RegisterEvent />
        </div>
        </div>
    )
}